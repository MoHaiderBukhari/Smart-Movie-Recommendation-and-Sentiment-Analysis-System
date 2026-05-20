const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const TMDB_API_KEY = Deno.env.get('TMDB_API_KEY')!
const TMDB_BASE = 'https://api.themoviedb.org/3'
const IMG_BASE = 'https://image.tmdb.org/t/p'

// Simple keyword-based sentiment (VADER-lite) for TMDB review text
const POS = ['great','amazing','excellent','best','love','loved','wonderful','brilliant','masterpiece','perfect','beautiful','fantastic','outstanding','incredible','enjoyable','superb','remarkable','stunning','captivating','powerful','moving','impressive','recommend','favorite','good','enjoy','fun','epic']
const NEG = ['bad','worst','boring','awful','terrible','hate','hated','poor','disappointing','disappointed','waste','dull','weak','flawed','mess','mediocre','forgettable','annoying','stupid','painful','overrated','predictable','slow','confusing','lacks','fails','meh']

function scoreText(text: string): { sentiment: 'positive'|'negative'|'neutral'; score: number } {
  const lower = text.toLowerCase()
  let pos = 0, neg = 0
  for (const w of POS) if (lower.includes(w)) pos++
  for (const w of NEG) if (lower.includes(w)) neg++
  const total = pos + neg
  if (total === 0) return { sentiment: 'neutral', score: 0 }
  const raw = (pos - neg) / total
  const score = Math.round(raw * 100) / 100
  const sentiment = raw > 0.2 ? 'positive' : raw < -0.2 ? 'negative' : 'neutral'
  return { sentiment, score }
}

function mapMovie(m: any) {
  return {
    id: m.id,
    title: m.title || m.name,
    year: m.release_date ? parseInt(m.release_date.slice(0, 4)) : 0,
    rating: Math.round((m.vote_average || 0) * 10) / 10,
    overview: m.overview || '',
    posterUrl: m.poster_path ? `${IMG_BASE}/w500${m.poster_path}` : null,
    backdropUrl: m.backdrop_path ? `${IMG_BASE}/w780${m.backdrop_path}` : null,
    genreIds: m.genre_ids || (m.genres ? m.genres.map((g: any) => g.id) : []),
    genres: m.genres ? m.genres.map((g: any) => g.name) : undefined,
  }
}

async function tmdb(path: string, params: Record<string, string> = {}) {
  const usp = new URLSearchParams({ api_key: TMDB_API_KEY, language: 'en-US', ...params })
  const res = await fetch(`${TMDB_BASE}${path}?${usp}`)
  if (!res.ok) throw new Error(`TMDB ${path} ${res.status}`)
  return res.json()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const text = await req.text()
    const body = (text ? JSON.parse(text) : {}) as { action: string; [k: string]: any }
    const { action } = body

    let payload: any

    if (action === 'genres') {
      const data = await tmdb('/genre/movie/list')
      payload = { genres: data.genres }
    } else if (action === 'popular') {
      const page = String(body.page || 1)
      const data = await tmdb('/movie/popular', { page })
      payload = { results: data.results.map(mapMovie), page: data.page, totalPages: data.total_pages }
    } else if (action === 'top_rated') {
      const page = String(body.page || 1)
      const data = await tmdb('/movie/top_rated', { page })
      payload = { results: data.results.map(mapMovie), page: data.page, totalPages: data.total_pages }
    } else if (action === 'discover') {
      const params: Record<string, string> = {
        page: String(body.page || 1),
        sort_by: body.sortBy || 'popularity.desc',
      }
      if (body.genreId) params.with_genres = String(body.genreId)
      const data = await tmdb('/discover/movie', params)
      payload = { results: data.results.map(mapMovie), page: data.page, totalPages: data.total_pages }
    } else if (action === 'search') {
      const query = String(body.query || '').trim()
      if (!query) { payload = { results: [] } }
      else {
        const data = await tmdb('/search/movie', { query, page: String(body.page || 1) })
        payload = { results: data.results.map(mapMovie) }
      }
    } else if (action === 'detail') {
      const id = body.id
      if (!id) throw new Error('id required')
      const [detail, reviews, similar] = await Promise.all([
        tmdb(`/movie/${id}`),
        tmdb(`/movie/${id}/reviews`),
        tmdb(`/movie/${id}/similar`),
      ])
      const movie = mapMovie(detail)
      const reviewList = (reviews.results || []).slice(0, 8).map((r: any) => {
        const text: string = r.content || ''
        const rating = r.author_details?.rating
        // Use TMDB rating if present, else keyword scoring
        let s
        if (typeof rating === 'number') {
          const normalized = (rating - 5) / 5 // -1..1
          s = {
            score: Math.round(normalized * 100) / 100,
            sentiment: (normalized > 0.2 ? 'positive' : normalized < -0.2 ? 'negative' : 'neutral') as const,
          }
        } else s = scoreText(text)
        return {
          author: r.author || 'Anonymous',
          text: text.length > 600 ? text.slice(0, 600) + '...' : text,
          ...s,
        }
      })
      payload = {
        movie,
        reviews: reviewList,
        similar: (similar.results || []).slice(0, 8).map(mapMovie),
      }
    } else if (action === 'byIds') {
      const ids: number[] = body.ids || []
      const results = await Promise.all(
        ids.slice(0, 40).map((id) => tmdb(`/movie/${id}`).then(mapMovie).catch(() => null))
      )
      payload = { results: results.filter(Boolean) }
    } else {
      return new Response(JSON.stringify({ error: 'unknown action' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify(payload), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
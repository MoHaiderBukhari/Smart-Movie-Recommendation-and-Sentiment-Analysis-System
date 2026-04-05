const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const TMDB_API_KEY = Deno.env.get('TMDB_API_KEY')!
const TMDB_BASE = 'https://api.themoviedb.org/3'
const IMG_BASE = 'https://image.tmdb.org/t/p'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { movies } = await req.json() as {
      movies: { title: string; year: number }[]
    }

    if (!movies || !Array.isArray(movies) || movies.length === 0) {
      return new Response(JSON.stringify({ error: 'movies array required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Process in batches to avoid rate limits - max 40 per request
    const batch = movies.slice(0, 40)

    const results: Record<string, string | null> = {}

    await Promise.all(
      batch.map(async ({ title, year }) => {
        const key = `${title}__${year}`
        try {
          const params = new URLSearchParams({
            api_key: TMDB_API_KEY,
            query: title,
            year: String(year),
          })
          const res = await fetch(`${TMDB_BASE}/search/movie?${params}`)
          const data = await res.json()

          if (data.results && data.results.length > 0) {
            const poster_path = data.results[0].poster_path
            if (poster_path) {
              results[key] = `${IMG_BASE}/w500${poster_path}`
            } else {
              results[key] = null
            }
          } else {
            results[key] = null
          }
        } catch {
          results[key] = null
        }
      })
    )

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

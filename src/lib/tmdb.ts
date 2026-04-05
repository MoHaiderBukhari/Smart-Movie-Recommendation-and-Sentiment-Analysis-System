import { supabase } from "@/integrations/supabase/client";

const CACHE_KEY = "tmdb_posters_cache";
const CACHE_VERSION = 1;

interface PosterCache {
  version: number;
  posters: Record<string, string>;
}

function loadCache(): Record<string, string> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const parsed: PosterCache = JSON.parse(raw);
      if (parsed.version === CACHE_VERSION) return parsed.posters;
    }
  } catch {}
  return {};
}

function saveCache(posters: Record<string, string>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ version: CACHE_VERSION, posters }));
  } catch {}
}

const cache = loadCache();
const pending = new Map<string, Promise<void>>();

export function getPosterUrl(title: string, year: number): string | null {
  const key = `${title}__${year}`;
  return cache[key] || null;
}

export async function fetchPosters(
  movies: { title: string; year: number }[]
): Promise<Record<string, string>> {
  // Filter to only uncached movies
  const needed = movies.filter((m) => !((`${m.title}__${m.year}`) in cache));
  
  if (needed.length === 0) return cache;

  // Batch in groups of 40
  for (let i = 0; i < needed.length; i += 40) {
    const batch = needed.slice(i, i + 40);
    const batchKey = batch.map(m => `${m.title}__${m.year}`).join(",");
    
    if (!pending.has(batchKey)) {
      const promise = (async () => {
        try {
          const { data, error } = await supabase.functions.invoke("tmdb-poster", {
            body: { movies: batch },
          });
          
          if (!error && data?.results) {
            for (const [key, url] of Object.entries(data.results)) {
              if (url) cache[key] = url as string;
            }
            saveCache(cache);
          }
        } catch (e) {
          console.error("Failed to fetch posters:", e);
        } finally {
          pending.delete(batchKey);
        }
      })();
      pending.set(batchKey, promise);
    }
    
    await pending.get(batchKey);
  }

  return cache;
}

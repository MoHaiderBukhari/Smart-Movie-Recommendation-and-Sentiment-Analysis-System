import { useState, useEffect, useCallback, useRef } from "react";
import { fetchPosters, getPosterUrl, onCacheUpdate } from "@/lib/tmdb";

// Global state to coordinate fetching across components
let fetchQueue: { title: string; year: number }[] = [];
let fetchTimer: ReturnType<typeof setTimeout> | null = null;

function queueFetch(title: string, year: number) {
  if (getPosterUrl(title, year)) return;
  
  const key = `${title}__${year}`;
  if (!fetchQueue.some((m) => `${m.title}__${m.year}` === key)) {
    fetchQueue.push({ title, year });
  }

  if (fetchTimer) clearTimeout(fetchTimer);
  fetchTimer = setTimeout(async () => {
    const batch = [...fetchQueue];
    fetchQueue = [];
    fetchTimer = null;
    if (batch.length > 0) {
      await fetchPosters(batch);
    }
  }, 300);
}

export function useTmdbPoster(title: string, year: number): string | null {
  const [url, setUrl] = useState(() => getPosterUrl(title, year));
  const mountedRef = useRef(true);

  const refresh = useCallback(() => {
    const cached = getPosterUrl(title, year);
    if (cached && mountedRef.current) setUrl(cached);
  }, [title, year]);

  useEffect(() => {
    mountedRef.current = true;
    const unsub = onCacheUpdate(refresh);
    queueFetch(title, year);

    return () => {
      mountedRef.current = false;
      unsub();
    };
  }, [title, year, refresh]);

  return url;
}

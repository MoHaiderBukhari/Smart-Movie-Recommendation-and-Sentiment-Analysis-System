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
  const prevKeyRef = useRef(`${title}__${year}`);

  // Reset URL when movie changes
  const currentKey = `${title}__${year}`;
  if (prevKeyRef.current !== currentKey) {
    prevKeyRef.current = currentKey;
    const cached = getPosterUrl(title, year);
    setUrl(cached);
  }

  const refresh = useCallback(() => {
    const cached = getPosterUrl(title, year);
    if (mountedRef.current) setUrl(cached);
  }, [title, year]);

  useEffect(() => {
    mountedRef.current = true;
    // Check cache immediately on mount/change
    const cached = getPosterUrl(title, year);
    if (cached) setUrl(cached);
    
    const unsub = onCacheUpdate(refresh);
    queueFetch(title, year);

    return () => {
      mountedRef.current = false;
      unsub();
    };
  }, [title, year, refresh]);

  return url;
}

import { useState, useEffect, useCallback, useRef } from "react";
import { fetchPosters, getPosterUrl } from "@/lib/tmdb";

// Global state to coordinate fetching across components
let fetchQueue: { title: string; year: number }[] = [];
let fetchTimer: ReturnType<typeof setTimeout> | null = null;
let listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((fn) => fn());
}

function queueFetch(title: string, year: number) {
  // Skip if already cached
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
      notifyListeners();
    }
  }, 300); // Debounce 300ms to batch visible movies
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
    listeners.add(refresh);
    queueFetch(title, year);

    return () => {
      mountedRef.current = false;
      listeners.delete(refresh);
    };
  }, [title, year, refresh]);

  return url;
}

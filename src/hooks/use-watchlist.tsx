import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import type { Movie } from "@/lib/tmdb-api";

interface WatchlistContextType {
  watchlist: Movie[];
  toggle: (movie: Movie) => void;
  has: (movieId: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
  toggle: () => {},
  has: () => false,
});

const STORAGE_KEY = "cinematch-watchlist-v2";

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const toggle = useCallback((movie: Movie) => {
    setWatchlist((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  }, []);

  const has = useCallback(
    (movieId: number) => watchlist.some((m) => m.id === movieId),
    [watchlist]
  );

  return (
    <WatchlistContext.Provider value={{ watchlist, toggle, has }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export const useWatchlist = () => useContext(WatchlistContext);

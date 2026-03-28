import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

interface WatchlistContextType {
  watchlist: number[];
  toggle: (movieId: number) => void;
  has: (movieId: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
  toggle: () => {},
  has: () => false,
});

const STORAGE_KEY = "cinematch-watchlist";

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<number[]>(() => {
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

  const toggle = useCallback((movieId: number) => {
    setWatchlist((prev) =>
      prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]
    );
  }, []);

  const has = useCallback((movieId: number) => watchlist.includes(movieId), [watchlist]);

  return (
    <WatchlistContext.Provider value={{ watchlist, toggle, has }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export const useWatchlist = () => useContext(WatchlistContext);

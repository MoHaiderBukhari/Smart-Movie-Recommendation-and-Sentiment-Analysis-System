import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  overview: string;
  posterUrl: string | null;
  backdropUrl?: string | null;
  genreIds?: number[];
  genres?: string[];
}

export interface Review {
  author: string;
  text: string;
  sentiment: "positive" | "negative" | "neutral";
  score: number;
}

export interface SentimentResult {
  positive: number;
  negative: number;
  neutral: number;
  compound: number;
}

export interface Genre { id: number; name: string }

async function callTmdb<T>(body: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke("tmdb-api", { body });
  if (error) throw error;
  if (data?.error) throw new Error(data.error);
  return data as T;
}

export function useGenres() {
  return useQuery({
    queryKey: ["tmdb", "genres"],
    queryFn: () => callTmdb<{ genres: Genre[] }>({ action: "genres" }).then((d) => d.genres),
    staleTime: 1000 * 60 * 60 * 24,
  });
}

export function usePopularMovies() {
  return useQuery({
    queryKey: ["tmdb", "popular"],
    queryFn: () => callTmdb<{ results: Movie[] }>({ action: "popular" }).then((d) => d.results),
    staleTime: 1000 * 60 * 10,
  });
}

export function useTopRated() {
  return useQuery({
    queryKey: ["tmdb", "top_rated"],
    queryFn: () => callTmdb<{ results: Movie[] }>({ action: "top_rated" }).then((d) => d.results),
    staleTime: 1000 * 60 * 10,
  });
}

export function useDiscover(genreId: number | null) {
  return useQuery({
    queryKey: ["tmdb", "discover", genreId ?? "all"],
    queryFn: () =>
      callTmdb<{ results: Movie[] }>({
        action: "discover",
        genreId: genreId ?? undefined,
      }).then((d) => d.results),
    staleTime: 1000 * 60 * 10,
  });
}

export function useSearch(query: string) {
  return useQuery({
    queryKey: ["tmdb", "search", query],
    queryFn: () =>
      callTmdb<{ results: Movie[] }>({ action: "search", query }).then((d) => d.results),
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 5,
  });
}

export function useMovieDetail(id: number | null) {
  return useQuery({
    queryKey: ["tmdb", "detail", id],
    queryFn: () =>
      callTmdb<{ movie: Movie; reviews: Review[]; similar: Movie[] }>({
        action: "detail",
        id,
      }),
    enabled: id != null,
    staleTime: 1000 * 60 * 10,
  });
}

export function useMoviesByIds(ids: number[]) {
  const sortedKey = [...ids].sort((a, b) => a - b).join(",");
  return useQuery({
    queryKey: ["tmdb", "byIds", sortedKey],
    queryFn: () =>
      callTmdb<{ results: Movie[] }>({ action: "byIds", ids }).then((d) => d.results),
    enabled: ids.length > 0,
    staleTime: 1000 * 60 * 30,
  });
}

export function analyzeSentiment(reviews: Review[]): SentimentResult {
  if (reviews.length === 0) {
    return { positive: 0, negative: 0, neutral: 0, compound: 0 };
  }
  const pos = reviews.filter((r) => r.sentiment === "positive").length;
  const neg = reviews.filter((r) => r.sentiment === "negative").length;
  const neu = reviews.filter((r) => r.sentiment === "neutral").length;
  const total = reviews.length;
  const compound = reviews.reduce((s, r) => s + r.score, 0) / total;
  return {
    positive: (pos / total) * 100,
    negative: (neg / total) * 100,
    neutral: (neu / total) * 100,
    compound: Math.round(compound * 100) / 100,
  };
}

export function genreNames(genreIds: number[] | undefined, all: Genre[] | undefined): string[] {
  if (!genreIds || !all) return [];
  const map = new Map(all.map((g) => [g.id, g.name]));
  return genreIds.map((id) => map.get(id)).filter(Boolean) as string[];
}
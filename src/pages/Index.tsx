import { useState } from "react";
import { Film, Bookmark } from "lucide-react";
import { useGenres, usePopularMovies, useDiscover, type Movie } from "@/lib/tmdb-api";
import { useWatchlist } from "@/hooks/use-watchlist";
import HeroSection from "@/components/HeroSection";
import MovieCard from "@/components/MovieCard";
import MovieDetail from "@/components/MovieDetail";

const Index = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeGenre, setActiveGenre] = useState<number | null>(null);

  const { watchlist } = useWatchlist();
  const { data: genres } = useGenres();
  const { data: trending, isLoading: trendingLoading } = usePopularMovies();
  const { data: discoverMovies, isLoading: discoverLoading } = useDiscover(activeGenre);

  const openMovie = (m: Movie) => setSelectedId(m.id);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">SMRSA</span>
          </div>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Powered by TMDB · Smart Movie Recommendations &amp; Sentiment Analysis
          </p>
        </div>
      </nav>

      <HeroSection onSelectMovie={openMovie} />

      {watchlist.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-primary fill-primary" />
              My Watchlist
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {watchlist.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} onClick={openMovie} index={i} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-semibold text-foreground">Trending Films</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        {trendingLoading ? (
          <p className="text-center text-muted-foreground py-12">Loading trending films…</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {trending?.slice(0, 8).map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} onClick={openMovie} index={i} />
            ))}
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-semibold text-foreground">Discover</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveGenre(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeGenre === null
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary text-secondary-foreground border-border hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            All
          </button>
          {genres?.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGenre(g.id === activeGenre ? null : g.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeGenre === g.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-secondary-foreground border-border hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        {discoverLoading ? (
          <p className="text-center text-muted-foreground py-12">Loading movies…</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {discoverMovies?.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} onClick={openMovie} index={i} />
            ))}
          </div>
        )}
        {!discoverLoading && discoverMovies?.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No movies found for this genre.</p>
        )}
      </section>

      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Smart Movie Recommendation and Sentiment Analysis System — Powered by TMDB & Content-Based Filtering
        </p>
      </footer>

      {selectedId != null && (
        <MovieDetail
          movieId={selectedId}
          onClose={() => setSelectedId(null)}
          onSelectMovie={(m) => setSelectedId(m.id)}
        />
      )}
    </div>
  );
};

export default Index;
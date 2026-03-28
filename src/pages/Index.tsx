import { useState, useMemo } from "react";
import { Film, Bookmark } from "lucide-react";
import type { Movie } from "@/data/movies";
import { movies } from "@/data/movies";
import { useWatchlist } from "@/hooks/use-watchlist";
import HeroSection from "@/components/HeroSection";
import MovieCard from "@/components/MovieCard";
import MovieDetail from "@/components/MovieDetail";

const allGenres = Array.from(new Set(movies.flatMap((m) => m.genres))).sort();

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const { watchlist } = useWatchlist();

  const watchlistMovies = useMemo(
    () => movies.filter((m) => watchlist.includes(m.id)),
    [watchlist]
  );

  const trending = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8);

  const filteredMovies = useMemo(
    () => activeGenre ? movies.filter((m) => m.genres.includes(activeGenre)) : movies,
    [activeGenre]
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">SMRSA</span>
          </div>
          <p className="text-xs text-muted-foreground hidden sm:block">Smart Movie Recommendations & Sentiment Analysis</p>
        </div>
      </nav>

      <HeroSection onSelectMovie={setSelectedMovie} />

      {/* Watchlist */}
      {watchlistMovies.length > 0 && (
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
            {watchlistMovies.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Trending */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-semibold text-foreground">Trending Films</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {trending.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} index={i} />
          ))}
        </div>
      </section>

      {/* All Movies */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl font-semibold text-foreground">All Movies</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Genre Filters */}
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
          {allGenres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre === activeGenre ? null : genre)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeGenre === genre
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-secondary-foreground border-border hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredMovies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} index={i} />
          ))}
        </div>
        {filteredMovies.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No movies found for this genre.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">CineMatch — Powered by Content-Based Filtering & VADER Sentiment Analysis</p>
      </footer>

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onSelectMovie={(m) => setSelectedMovie(m)}
        />
      )}
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Film } from "lucide-react";
import type { Movie } from "@/data/movies";
import { movies } from "@/data/movies";
import HeroSection from "@/components/HeroSection";
import MovieCard from "@/components/MovieCard";
import MovieDetail from "@/components/MovieDetail";

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const trending = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">CineMatch</span>
          </div>
          <p className="text-xs text-muted-foreground hidden sm:block">Smart Movie Recommendations & Sentiment Analysis</p>
        </div>
      </nav>

      <HeroSection onSelectMovie={setSelectedMovie} />

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {movies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} index={i} />
          ))}
        </div>
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

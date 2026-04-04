import { Bookmark } from "lucide-react";
import { useState } from "react";
import type { Movie } from "@/data/movies";
import { useWatchlist } from "@/hooks/use-watchlist";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
  index?: number;
}

const MovieCard = ({ movie, onClick, index = 0 }: MovieCardProps) => {
  const { toggle, has } = useWatchlist();
  const saved = has(movie.id);

  return (
    <div
      className="group text-left animate-fade-in relative"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button onClick={() => onClick(movie)} className="w-full text-left">
        <div className="relative overflow-hidden rounded-lg aspect-[2/3] bg-muted mb-3">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1.5">
              <span className="text-primary text-sm font-semibold">★ {movie.rating}</span>
              <span className="text-muted-foreground text-xs">/ 10</span>
            </div>
          </div>
        </div>
        <h3 className="font-display text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {movie.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">{movie.year} · {movie.genres.slice(0, 2).join(", ")}</p>
      </button>

      {/* Watchlist bookmark */}
      <button
        onClick={(e) => { e.stopPropagation(); toggle(movie.id); }}
        className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all duration-200 ${
          saved
            ? "bg-primary text-primary-foreground opacity-100"
            : "bg-background/70 text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
        }`}
        aria-label={saved ? "Remove from watchlist" : "Add to watchlist"}
      >
        <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
      </button>
    </div>
  );
};

export default MovieCard;

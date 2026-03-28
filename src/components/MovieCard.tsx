import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
  index?: number;
}

const MovieCard = ({ movie, onClick, index = 0 }: MovieCardProps) => {
  return (
    <button
      onClick={() => onClick(movie)}
      className="group text-left animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
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
  );
};

export default MovieCard;

import { X, Bookmark } from "lucide-react";
import MoviePoster from "./MoviePoster";
import { analyzeSentiment, useMovieDetail, type Movie } from "@/lib/tmdb-api";
import { useWatchlist } from "@/hooks/use-watchlist";
import SentimentChart from "./SentimentChart";
import MovieCard from "./MovieCard";

interface MovieDetailProps {
  movieId: number;
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
}

const MovieDetail = ({ movieId, onClose, onSelectMovie }: MovieDetailProps) => {
  const { data, isLoading } = useMovieDetail(movieId);
  const { toggle, has } = useWatchlist();

  const movie = data?.movie;
  const reviews = data?.reviews ?? [];
  const similar = data?.similar ?? [];
  const sentiment = analyzeSentiment(reviews);
  const saved = movie ? has(movie.id) : false;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-sm p-4 pt-20 pb-10 animate-fade-in">
      <div className="relative w-full max-w-3xl bg-card border border-border rounded-xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoading || !movie ? (
          <div className="p-12 text-center text-muted-foreground">Loading…</div>
        ) : (
        <>
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 pb-0">
          <MoviePoster
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            genres={movie.genres ?? []}
            posterUrl={movie.posterUrl}
            className="w-40 h-60 rounded-lg shadow-lg flex-shrink-0 self-center sm:self-start"
          />
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{movie.title}</h2>
            <p className="text-muted-foreground mt-1">{movie.year || ""}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {(movie.genres ?? []).map((g) => (
                <span key={g} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                  {g}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-primary text-xl font-bold">★ {movie.rating}</span>
              <span className="text-muted-foreground text-sm">/ 10</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{movie.overview}</p>
            <button
              onClick={() => toggle(movie)}
              className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                saved
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
              {saved ? "In Watchlist" : "Add to Watchlist"}
            </button>
          </div>
        </div>

        {/* Sentiment */}
        <div className="p-6">
          {reviews.length > 0 ? (
            <>
              <SentimentChart sentiment={sentiment} />
              <div className="mt-6 space-y-3">
                <h4 className="font-display text-lg text-foreground">Reviews</h4>
                {reviews.map((review, i) => (
                  <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">— {review.author}</p>
                    <p className="text-sm text-foreground/90 italic">"{review.text}"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        review.sentiment === "positive" ? "bg-emerald-500/20 text-emerald-400" :
                        review.sentiment === "negative" ? "bg-destructive/20 text-destructive" :
                        "bg-primary/20 text-primary"
                      }`}>
                        {review.sentiment}
                      </span>
                      <span className="text-xs text-muted-foreground">Score: {review.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground italic">No reviews available for this movie yet.</p>
          )}
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <div className="p-6 pt-0">
            <h4 className="font-display text-lg text-foreground mb-4">Similar Movies</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {similar.slice(0, 4).map((m, i) => (
                <MovieCard key={m.id} movie={m} onClick={onSelectMovie} index={i} />
              ))}
            </div>
          </div>
        )}
        </>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;

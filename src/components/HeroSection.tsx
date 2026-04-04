import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { Movie } from "@/data/movies";
import { movies } from "@/data/movies";
import MoviePoster from "./MoviePoster";

interface HeroSectionProps {
  onSelectMovie: (movie: Movie) => void;
}

const HeroSection = ({ onSelectMovie }: HeroSectionProps) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = query.length > 0
    ? movies.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShowResults(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <h1 className="relative font-display text-3xl sm:text-5xl font-bold tracking-tight text-center">
        <span className="text-gradient-gold">Smart Movie Recommendation</span>
        <br />
        <span className="text-gradient-gold">&amp; Sentiment Analysis</span>
      </h1>
      <p className="relative mt-4 text-lg text-muted-foreground max-w-md">
        Discover your next favorite film with AI-powered recommendations & sentiment analysis
      </p>

      {/* Search */}
      <div ref={ref} className="relative mt-10 w-full max-w-lg">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setShowResults(true); }}
            onFocus={() => setShowResults(true)}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        {showResults && query.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl overflow-hidden z-20 max-h-80 overflow-y-auto">
            {filtered.length > 0 ? (
              filtered.slice(0, 8).map((m) => {
                const sentimentLabel = m.reviews.length > 0
                  ? m.reviews.filter(r => r.sentiment === "positive").length > m.reviews.length / 2
                    ? "Mostly Positive"
                    : m.reviews.filter(r => r.sentiment === "negative").length > m.reviews.length / 2
                      ? "Mostly Negative"
                      : "Mixed"
                  : "No Reviews";
                const sentimentColor = sentimentLabel === "Mostly Positive"
                  ? "text-emerald-400"
                  : sentimentLabel === "Mostly Negative"
                    ? "text-destructive"
                    : "text-primary";
                return (
                  <button
                    key={m.id}
                    onClick={() => { onSelectMovie(m); setQuery(""); setShowResults(false); }}
                    className="flex items-start gap-3 w-full px-4 py-3 text-left hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                  >
                    <MoviePoster title={m.title} year={m.year} rating={m.rating} genres={m.genres} className="w-10 h-14 rounded flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{m.title}</p>
                      <p className="text-xs text-muted-foreground">{m.year} · {m.genres.join(", ")}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-primary text-xs font-semibold">★ {m.rating}</span>
                        <span className={`text-xs font-medium ${sentimentColor}`}>{sentimentLabel}</span>
                      </div>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                No movies found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

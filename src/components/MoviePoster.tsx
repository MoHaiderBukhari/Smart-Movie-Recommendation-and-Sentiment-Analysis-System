import { useMemo, useState } from "react";
import { useTmdbPoster } from "@/hooks/use-tmdb-poster";

interface MoviePosterProps {
  title: string;
  year: number;
  rating: number;
  genres: string[];
  className?: string;
}

// Genre-based gradient palettes
const genreGradients: Record<string, [string, string, string]> = {
  Action:    ["#b91c1c", "#dc2626", "#f87171"],
  "Sci-Fi":  ["#4c1d95", "#7c3aed", "#a78bfa"],
  Thriller:  ["#1e293b", "#334155", "#64748b"],
  Crime:     ["#78350f", "#92400e", "#d97706"],
  Drama:     ["#1e3a5f", "#1e40af", "#3b82f6"],
  Comedy:    ["#854d0e", "#ca8a04", "#facc15"],
  Animation: ["#0e7490", "#06b6d4", "#67e8f9"],
  Horror:    ["#450a0a", "#7f1d1d", "#991b1b"],
  Romance:   ["#831843", "#db2777", "#f472b6"],
  Fantasy:   ["#3b0764", "#7e22ce", "#c084fc"],
  Adventure: ["#064e3b", "#059669", "#34d399"],
  War:       ["#292524", "#57534e", "#a8a29e"],
  Musical:   ["#881337", "#e11d48", "#fb7185"],
  Western:   ["#78350f", "#b45309", "#f59e0b"],
  Mystery:   ["#312e81", "#4338ca", "#818cf8"],
  Biography: ["#134e4a", "#0f766e", "#2dd4bf"],
  History:   ["#713f12", "#a16207", "#eab308"],
  Family:    ["#1e3a8a", "#2563eb", "#60a5fa"],
  Sport:     ["#14532d", "#16a34a", "#4ade80"],
  Music:     ["#701a75", "#a21caf", "#e879f9"],
  Anime:     ["#be123c", "#f43f5e", "#fda4af"],
  Documentary: ["#365314", "#4d7c0f", "#84cc16"],
};

const defaultGradient: [string, string, string] = ["#4338ca", "#6366f1", "#a5b4fc"];

const hashStr = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
};

const MoviePoster = ({ title, year, rating, genres, className = "" }: MoviePosterProps) => {
  const posterUrl = useTmdbPoster(title, year);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showImage = posterUrl && !imgError;

  const { grad, angle } = useMemo(() => {
    const hash = hashStr(title);
    const g = genres.length > 0 ? (genreGradients[genres[0]] || defaultGradient) : defaultGradient;
    return { grad: g, angle: hash % 360 };
  }, [title, genres]);

  const initials = title
    .split(/[\s:]+/)
    .filter(w => w.length > 0 && w[0] === w[0].toUpperCase())
    .slice(0, 3)
    .map(w => w[0])
    .join("");

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, ${grad[0]}, ${grad[1]} 50%, ${grad[2]})`,
      }}
    >
      {/* TMDB poster image */}
      {showImage && (
        <img
          src={posterUrl}
          alt={title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Gradient fallback content - shown when no image or loading */}
      {(!showImage || !imgLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
          <div
            className="text-white/20 font-bold leading-none select-none"
            style={{ fontSize: `${Math.max(2, 5 - initials.length * 0.5)}rem` }}
          >
            {initials}
          </div>
          <h3 className="text-white font-bold text-xs sm:text-sm leading-tight mt-2 drop-shadow-lg line-clamp-3 px-1">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-white/70 text-[10px] font-medium">{year}</span>
            <span className="text-yellow-300 text-[10px] font-semibold">★ {rating}</span>
          </div>
        </div>
      )}

      {/* Bottom gradient for image posters */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
};

export default MoviePoster;

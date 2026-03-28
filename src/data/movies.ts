export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  rating: number;
  poster: string;
  overview: string;
  reviews: Review[];
}

export interface Review {
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

export const movies: Movie[] = [
  {
    id: 1, title: "Inception", year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
    reviews: [
      { text: "A masterpiece of modern cinema. Nolan outdid himself!", sentiment: "positive", score: 0.92 },
      { text: "Visually stunning but the plot is overly convoluted.", sentiment: "neutral", score: 0.1 },
      { text: "One of the best sci-fi films ever made. Incredible experience.", sentiment: "positive", score: 0.95 },
      { text: "Too confusing and pretentious for its own good.", sentiment: "negative", score: -0.6 },
      { text: "The soundtrack alone makes this worth watching.", sentiment: "positive", score: 0.78 },
    ],
  },
  {
    id: 2, title: "The Dark Knight", year: 2008,
    genres: ["Action", "Crime", "Drama"],
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    overview: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest tests to fight injustice.",
    reviews: [
      { text: "Heath Ledger's Joker is legendary. Best superhero film ever.", sentiment: "positive", score: 0.97 },
      { text: "Dark, intense, and brilliantly crafted.", sentiment: "positive", score: 0.88 },
      { text: "A bit too long but still an amazing film.", sentiment: "positive", score: 0.65 },
      { text: "Overhyped. It's good but not the masterpiece people claim.", sentiment: "neutral", score: -0.1 },
    ],
  },
  {
    id: 3, title: "Interstellar", year: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    reviews: [
      { text: "Emotionally powerful and scientifically fascinating.", sentiment: "positive", score: 0.91 },
      { text: "The docking scene had me on the edge of my seat.", sentiment: "positive", score: 0.82 },
      { text: "Beautiful visuals but the love storyline felt forced.", sentiment: "neutral", score: 0.2 },
    ],
  },
  {
    id: 4, title: "Pulp Fiction", year: 1994,
    genres: ["Crime", "Drama"],
    rating: 8.9,
    poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    reviews: [
      { text: "Tarantino's magnum opus. Every scene is iconic.", sentiment: "positive", score: 0.94 },
      { text: "Revolutionary storytelling that changed cinema forever.", sentiment: "positive", score: 0.89 },
      { text: "Gratuitously violent and style over substance.", sentiment: "negative", score: -0.55 },
    ],
  },
  {
    id: 5, title: "The Matrix", year: 1999,
    genres: ["Action", "Sci-Fi"],
    rating: 8.7,
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNlYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    overview: "A computer programmer discovers that reality as he knows it is a simulation created by machines.",
    reviews: [
      { text: "Groundbreaking visual effects and a thought-provoking story.", sentiment: "positive", score: 0.9 },
      { text: "Still holds up decades later. A true classic.", sentiment: "positive", score: 0.85 },
      { text: "The philosophy is shallow despite the cool action.", sentiment: "neutral", score: 0.05 },
    ],
  },
  {
    id: 6, title: "Forrest Gump", year: 1994,
    genres: ["Drama", "Romance"],
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    overview: "The presidencies of Kennedy and Johnson through the eyes of an Alabama man with an IQ of 75.",
    reviews: [
      { text: "Heartwarming and beautifully acted by Tom Hanks.", sentiment: "positive", score: 0.93 },
      { text: "A feel-good movie that never gets old.", sentiment: "positive", score: 0.87 },
      { text: "Overly sentimental and historically inaccurate.", sentiment: "negative", score: -0.4 },
    ],
  },
  {
    id: 7, title: "Fight Club", year: 1999,
    genres: ["Drama", "Thriller"],
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
    overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
    reviews: [
      { text: "A provocative and brilliantly twisted film.", sentiment: "positive", score: 0.88 },
      { text: "The twist ending is one of cinema's greatest.", sentiment: "positive", score: 0.82 },
      { text: "Glorifies violence and toxic masculinity.", sentiment: "negative", score: -0.7 },
    ],
  },
  {
    id: 8, title: "The Shawshank Redemption", year: 1994,
    genres: ["Drama"],
    rating: 9.3,
    poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    reviews: [
      { text: "The greatest film ever made. Pure perfection.", sentiment: "positive", score: 0.98 },
      { text: "Morgan Freeman's narration is hauntingly beautiful.", sentiment: "positive", score: 0.91 },
      { text: "Slow-paced but ultimately rewarding.", sentiment: "positive", score: 0.6 },
    ],
  },
  {
    id: 9, title: "Goodfellas", year: 1990,
    genres: ["Biography", "Crime", "Drama"],
    rating: 8.7,
    poster: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
    reviews: [
      { text: "Scorsese at his finest. Electrifying from start to finish.", sentiment: "positive", score: 0.93 },
      { text: "The best gangster movie ever made.", sentiment: "positive", score: 0.9 },
      { text: "Romanticizes criminal lifestyle too much.", sentiment: "negative", score: -0.45 },
    ],
  },
  {
    id: 10, title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001,
    genres: ["Adventure", "Drama", "Fantasy"],
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOGY3NTU0MGUzXkEyXkFqcGc@._V1_SX300.jpg",
    overview: "A meek Hobbit and eight companions set out on a journey to destroy the One Ring and the Dark Lord Sauron.",
    reviews: [
      { text: "A breathtaking epic that defined a generation.", sentiment: "positive", score: 0.95 },
      { text: "Peter Jackson created a masterpiece of fantasy cinema.", sentiment: "positive", score: 0.92 },
      { text: "Too long and too many walking scenes.", sentiment: "negative", score: -0.35 },
    ],
  },
  {
    id: 11, title: "Blade Runner 2049", year: 2017,
    genres: ["Action", "Drama", "Sci-Fi"],
    rating: 8.0,
    poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
    overview: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    reviews: [
      { text: "A worthy sequel that surpasses the original in many ways.", sentiment: "positive", score: 0.87 },
      { text: "Visually the most beautiful film I've ever seen.", sentiment: "positive", score: 0.93 },
      { text: "Too slow and self-indulgent.", sentiment: "negative", score: -0.5 },
    ],
  },
  {
    id: 12, title: "Parasite", year: 2019,
    genres: ["Comedy", "Drama", "Thriller"],
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    reviews: [
      { text: "A masterclass in filmmaking. Bong Joon-ho is a genius.", sentiment: "positive", score: 0.96 },
      { text: "Unpredictable, thrilling, and deeply meaningful.", sentiment: "positive", score: 0.9 },
      { text: "Overhyped but still a solid film.", sentiment: "neutral", score: 0.15 },
    ],
  },
];

// Simple content-based recommendation using genre overlap
export function getRecommendations(movieId: number, count = 5): Movie[] {
  const target = movies.find((m) => m.id === movieId);
  if (!target) return [];

  const scored = movies
    .filter((m) => m.id !== movieId)
    .map((m) => {
      const shared = m.genres.filter((g) => target.genres.includes(g)).length;
      const total = new Set([...m.genres, ...target.genres]).size;
      return { movie: m, similarity: shared / total };
    })
    .sort((a, b) => b.similarity - a.similarity);

  return scored.slice(0, count).map((s) => s.movie);
}

export function analyzeSentiment(movie: Movie): SentimentResult {
  const reviews = movie.reviews;
  const pos = reviews.filter((r) => r.sentiment === "positive").length;
  const neg = reviews.filter((r) => r.sentiment === "negative").length;
  const neu = reviews.filter((r) => r.sentiment === "neutral").length;
  const total = reviews.length || 1;
  const compound = reviews.reduce((sum, r) => sum + r.score, 0) / total;

  return {
    positive: (pos / total) * 100,
    negative: (neg / total) * 100,
    neutral: (neu / total) * 100,
    compound: Math.round(compound * 100) / 100,
  };
}

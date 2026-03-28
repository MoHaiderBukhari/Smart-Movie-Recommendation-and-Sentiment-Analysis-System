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
  {
    id: 13, title: "The Grand Budapest Hotel", year: 2014,
    genres: ["Adventure", "Comedy"],
    rating: 8.1,
    poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
    overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
    reviews: [
      { text: "Wes Anderson at his whimsical best. A visual delight.", sentiment: "positive", score: 0.91 },
      { text: "Charming, funny, and surprisingly touching.", sentiment: "positive", score: 0.85 },
      { text: "Too quirky and mannered for my taste.", sentiment: "negative", score: -0.3 },
    ],
  },
  {
    id: 14, title: "Spirited Away", year: 2001,
    genres: ["Animation", "Adventure", "Fantasy"],
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    reviews: [
      { text: "Miyazaki's masterpiece. Pure magic from start to finish.", sentiment: "positive", score: 0.97 },
      { text: "The most beautiful animated film ever created.", sentiment: "positive", score: 0.93 },
      { text: "A bit confusing for younger viewers but still enchanting.", sentiment: "neutral", score: 0.25 },
    ],
  },
  {
    id: 15, title: "Get Out", year: 2017,
    genres: ["Horror", "Mystery", "Thriller"],
    rating: 7.7,
    poster: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg",
    overview: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    reviews: [
      { text: "A brilliant social thriller that redefines the horror genre.", sentiment: "positive", score: 0.92 },
      { text: "Jordan Peele is a genius. Terrifying and thought-provoking.", sentiment: "positive", score: 0.89 },
      { text: "More thriller than horror, but incredibly effective.", sentiment: "positive", score: 0.7 },
      { text: "Overpraised. The twist is predictable.", sentiment: "negative", score: -0.4 },
    ],
  },
  {
    id: 16, title: "Whiplash", year: 2014,
    genres: ["Drama", "Music"],
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    overview: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing.",
    reviews: [
      { text: "Intense, gripping, and phenomenally acted.", sentiment: "positive", score: 0.94 },
      { text: "J.K. Simmons delivers one of the greatest performances ever.", sentiment: "positive", score: 0.96 },
      { text: "Exhausting to watch but in the best possible way.", sentiment: "positive", score: 0.72 },
    ],
  },
  {
    id: 17, title: "Mad Max: Fury Road", year: 2015,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.1,
    poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners and a lone drifter.",
    reviews: [
      { text: "Non-stop adrenaline. The best action film of the decade.", sentiment: "positive", score: 0.95 },
      { text: "A masterclass in visual storytelling and practical effects.", sentiment: "positive", score: 0.9 },
      { text: "All style, no substance. Just cars exploding.", sentiment: "negative", score: -0.5 },
    ],
  },
  {
    id: 18, title: "The Silence of the Lambs", year: 1991,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    overview: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    reviews: [
      { text: "Anthony Hopkins is absolutely terrifying as Hannibal Lecter.", sentiment: "positive", score: 0.93 },
      { text: "One of the greatest psychological thrillers ever made.", sentiment: "positive", score: 0.91 },
      { text: "Disturbing but impossible to look away from.", sentiment: "positive", score: 0.68 },
    ],
  },
  {
    id: 19, title: "La La Land", year: 2016,
    genres: ["Comedy", "Drama", "Music", "Romance"],
    rating: 8.0,
    poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg",
    overview: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    reviews: [
      { text: "A gorgeous love letter to dreamers. The ending destroyed me.", sentiment: "positive", score: 0.9 },
      { text: "Beautiful music, stunning cinematography, real emotion.", sentiment: "positive", score: 0.88 },
      { text: "Overrated. The singing is mediocre at best.", sentiment: "negative", score: -0.45 },
      { text: "A charming throwback to classic Hollywood musicals.", sentiment: "positive", score: 0.75 },
    ],
  },
  {
    id: 20, title: "Alien", year: 1979,
    genres: ["Horror", "Sci-Fi"],
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    overview: "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
    reviews: [
      { text: "The definition of sci-fi horror. Still terrifying decades later.", sentiment: "positive", score: 0.92 },
      { text: "Ridley Scott created an atmosphere of pure dread.", sentiment: "positive", score: 0.87 },
      { text: "Slow pacing kills the tension for modern audiences.", sentiment: "negative", score: -0.35 },
    ],
  },
  {
    id: 21, title: "Coco", year: 2017,
    genres: ["Animation", "Adventure", "Comedy"],
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    overview: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
    reviews: [
      { text: "I cried for 20 minutes straight. Pixar at its emotional peak.", sentiment: "positive", score: 0.95 },
      { text: "A vibrant celebration of Mexican culture and family.", sentiment: "positive", score: 0.9 },
      { text: "Predictable plot but beautifully executed.", sentiment: "neutral", score: 0.2 },
    ],
  },
  {
    id: 22, title: "The Godfather", year: 1972,
    genres: ["Crime", "Drama"],
    rating: 9.2,
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    overview: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    reviews: [
      { text: "The greatest film ever made. Marlon Brando is iconic.", sentiment: "positive", score: 0.98 },
      { text: "A perfect blend of family drama and crime storytelling.", sentiment: "positive", score: 0.94 },
      { text: "Too slow for modern tastes but undeniably influential.", sentiment: "neutral", score: 0.15 },
    ],
  },
  {
    id: 23, title: "Joker", year: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City.",
    reviews: [
      { text: "Joaquin Phoenix gives the performance of a lifetime.", sentiment: "positive", score: 0.95 },
      { text: "Dark, uncomfortable, but absolutely riveting.", sentiment: "positive", score: 0.82 },
      { text: "Irresponsible filmmaking that glorifies violence.", sentiment: "negative", score: -0.65 },
      { text: "A character study that doesn't need the comic book connection.", sentiment: "neutral", score: 0.1 },
    ],
  },
  {
    id: 24, title: "Everything Everywhere All at Once", year: 2022,
    genres: ["Action", "Adventure", "Comedy"],
    rating: 7.8,
    poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
    overview: "A middle-aged Chinese immigrant is swept up in an insane adventure where she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    reviews: [
      { text: "The most creative and heartfelt film in years.", sentiment: "positive", score: 0.96 },
      { text: "A beautiful meditation on family disguised as a multiverse action film.", sentiment: "positive", score: 0.91 },
      { text: "Too chaotic and random. Style over coherence.", sentiment: "negative", score: -0.4 },
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

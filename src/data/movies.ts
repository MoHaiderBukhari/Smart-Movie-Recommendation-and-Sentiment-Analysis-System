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
  {
    id: 25, title: "Schindler's List", year: 1993,
    genres: ["Biography", "Drama", "History"],
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    reviews: [
      { text: "The most powerful and important film ever made.", sentiment: "positive", score: 0.98 },
      { text: "Liam Neeson and Ralph Fiennes deliver career-defining performances.", sentiment: "positive", score: 0.94 },
      { text: "Emotionally devastating but absolutely necessary viewing.", sentiment: "positive", score: 0.88 },
      { text: "Hard to watch but impossible to forget.", sentiment: "positive", score: 0.8 },
    ],
  },
  {
    id: 26, title: "The Departed", year: 2006,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
    overview: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    reviews: [
      { text: "Scorsese finally got his Oscar, and he deserved it.", sentiment: "positive", score: 0.91 },
      { text: "An ensemble cast firing on all cylinders.", sentiment: "positive", score: 0.87 },
      { text: "The ending is shocking and perfect.", sentiment: "positive", score: 0.83 },
      { text: "A bit convoluted but thrilling throughout.", sentiment: "neutral", score: 0.2 },
    ],
  },
  {
    id: 27, title: "WALL·E", year: 2008,
    genres: ["Animation", "Adventure", "Family"],
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    overview: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    reviews: [
      { text: "Pixar's most ambitious and beautiful film.", sentiment: "positive", score: 0.95 },
      { text: "A love story told almost entirely without dialogue. Genius.", sentiment: "positive", score: 0.92 },
      { text: "The environmental message is heavy-handed.", sentiment: "negative", score: -0.3 },
    ],
  },
  {
    id: 28, title: "No Country for Old Men", year: 2007,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.2,
    poster: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
    overview: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    reviews: [
      { text: "Javier Bardem is the most terrifying villain in cinema history.", sentiment: "positive", score: 0.93 },
      { text: "The Coen Brothers at their darkest and most brilliant.", sentiment: "positive", score: 0.89 },
      { text: "The ending is unsatisfying and anticlimactic.", sentiment: "negative", score: -0.55 },
    ],
  },
  {
    id: 29, title: "Django Unchained", year: 2012,
    genres: ["Drama", "Western"],
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
    overview: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
    reviews: [
      { text: "Tarantino delivers a thrilling, audacious revenge fantasy.", sentiment: "positive", score: 0.92 },
      { text: "Jamie Foxx and Christoph Waltz have incredible chemistry.", sentiment: "positive", score: 0.88 },
      { text: "Excessively violent and historically irresponsible.", sentiment: "negative", score: -0.6 },
      { text: "Leonardo DiCaprio steals every scene as Calvin Candie.", sentiment: "positive", score: 0.85 },
    ],
  },
  {
    id: 30, title: "The Social Network", year: 2010,
    genres: ["Biography", "Drama"],
    rating: 7.8,
    poster: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    overview: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.",
    reviews: [
      { text: "Aaron Sorkin's script is razor-sharp perfection.", sentiment: "positive", score: 0.94 },
      { text: "Defines a generation. Fincher at his most precise.", sentiment: "positive", score: 0.9 },
      { text: "Makes tech drama genuinely thrilling.", sentiment: "positive", score: 0.78 },
    ],
  },
  {
    id: 31, title: "Moonlight", year: 2016,
    genres: ["Drama"],
    rating: 7.4,
    poster: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg",
    overview: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    reviews: [
      { text: "A quiet, achingly beautiful meditation on identity.", sentiment: "positive", score: 0.93 },
      { text: "Mahershala Ali is extraordinary in every frame.", sentiment: "positive", score: 0.89 },
      { text: "Too slow and uneventful for mainstream audiences.", sentiment: "negative", score: -0.35 },
    ],
  },
  {
    id: 32, title: "The Prestige", year: 2006,
    genres: ["Drama", "Mystery", "Thriller"],
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
    overview: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have.",
    reviews: [
      { text: "Nolan's most underrated film. The twist is mind-blowing.", sentiment: "positive", score: 0.92 },
      { text: "Hugh Jackman and Christian Bale are fantastic together.", sentiment: "positive", score: 0.87 },
      { text: "Requires multiple viewings to fully appreciate.", sentiment: "positive", score: 0.7 },
      { text: "The sci-fi element feels out of place.", sentiment: "negative", score: -0.4 },
    ],
  },
  {
    id: 33, title: "Gladiator", year: 2000,
    genres: ["Action", "Adventure", "Drama"],
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTkxNmEtMTU2ODkxNTAzNmQ1XkEyXkFqcGc@._V1_SX300.jpg",
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    reviews: [
      { text: "Russell Crowe commands the screen. An epic masterpiece.", sentiment: "positive", score: 0.94 },
      { text: "The battle sequences are breathtaking.", sentiment: "positive", score: 0.88 },
      { text: "Historically inaccurate but incredibly entertaining.", sentiment: "neutral", score: 0.3 },
    ],
  },
  {
    id: 34, title: "Arrival", year: 2016,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    rating: 7.9,
    poster: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
    overview: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    reviews: [
      { text: "Intelligent sci-fi that prioritizes ideas over explosions.", sentiment: "positive", score: 0.91 },
      { text: "Amy Adams delivers a powerhouse performance.", sentiment: "positive", score: 0.88 },
      { text: "The twist recontextualizes the entire film beautifully.", sentiment: "positive", score: 0.85 },
      { text: "Too slow and cerebral for casual viewers.", sentiment: "negative", score: -0.3 },
    ],
  },
  {
    id: 35, title: "Toy Story", year: 1995,
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    rating: 8.3,
    poster: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
    overview: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's room.",
    reviews: [
      { text: "The film that started it all. Pixar magic at its purest.", sentiment: "positive", score: 0.94 },
      { text: "Timeless storytelling that appeals to all ages.", sentiment: "positive", score: 0.9 },
      { text: "The animation looks dated now but the heart remains.", sentiment: "neutral", score: 0.25 },
    ],
  },
  {
    id: 36, title: "The Truman Show", year: 1998,
    genres: ["Comedy", "Drama"],
    rating: 8.2,
    poster: "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    overview: "An insurance salesman discovers his whole life is actually a reality TV show.",
    reviews: [
      { text: "Jim Carrey proves he's more than a comedian. Brilliant.", sentiment: "positive", score: 0.92 },
      { text: "Prophetic and deeply unsettling in the social media age.", sentiment: "positive", score: 0.87 },
      { text: "A fascinating concept that never gets old.", sentiment: "positive", score: 0.8 },
    ],
  },
  {
    id: 37, title: "A Quiet Place", year: 2018,
    genres: ["Drama", "Horror", "Sci-Fi"],
    rating: 7.5,
    poster: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg",
    overview: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    reviews: [
      { text: "Ingenious concept executed with nerve-shredding tension.", sentiment: "positive", score: 0.91 },
      { text: "John Krasinski proves himself as a serious filmmaker.", sentiment: "positive", score: 0.84 },
      { text: "Some plot holes undermine the premise.", sentiment: "negative", score: -0.35 },
      { text: "The sound design alone deserves an Oscar.", sentiment: "positive", score: 0.88 },
    ],
  },
  {
    id: 38, title: "Saving Private Ryan", year: 1998,
    genres: ["Drama", "War"],
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    overview: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    reviews: [
      { text: "The opening D-Day sequence is the most harrowing war footage ever filmed.", sentiment: "positive", score: 0.93 },
      { text: "Spielberg reminds us of the true cost of war.", sentiment: "positive", score: 0.88 },
      { text: "Sentimental at times but powerfully effective.", sentiment: "neutral", score: 0.3 },
    ],
  },
  {
    id: 39, title: "Hereditary", year: 2018,
    genres: ["Drama", "Horror", "Mystery"],
    rating: 7.3,
    poster: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg",
    overview: "A grieving family is haunted by tragic and disturbing occurrences.",
    reviews: [
      { text: "The most terrifying film of the decade. Toni Collette was robbed of an Oscar.", sentiment: "positive", score: 0.94 },
      { text: "Ari Aster crafts dread like no other director.", sentiment: "positive", score: 0.88 },
      { text: "Too disturbing and unpleasant to enjoy.", sentiment: "negative", score: -0.6 },
      { text: "More trauma drama than horror, which makes it scarier.", sentiment: "neutral", score: 0.15 },
    ],
  },
  {
    id: 40, title: "The Lion King", year: 1994,
    genres: ["Animation", "Adventure", "Drama", "Family", "Music"],
    rating: 8.5,
    poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    overview: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    reviews: [
      { text: "Disney's crowning achievement. Perfection in every frame.", sentiment: "positive", score: 0.97 },
      { text: "The music by Hans Zimmer and Elton John is unforgettable.", sentiment: "positive", score: 0.93 },
      { text: "Mufasa's death still makes me cry decades later.", sentiment: "positive", score: 0.75 },
    ],
  },
  {
    id: 41, title: "Gone Girl", year: 2014,
    genres: ["Drama", "Mystery", "Thriller"],
    rating: 8.1,
    poster: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg",
    overview: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected he may not be innocent.",
    reviews: [
      { text: "Rosamund Pike is absolutely chilling. A career-best performance.", sentiment: "positive", score: 0.93 },
      { text: "Fincher turns a page-turner into a cinematic masterwork.", sentiment: "positive", score: 0.9 },
      { text: "Dark, twisted, and impossible to predict.", sentiment: "positive", score: 0.82 },
      { text: "The third act strains credibility.", sentiment: "negative", score: -0.35 },
    ],
  },
  {
    id: 42, title: "12 Angry Men", year: 1957,
    genres: ["Crime", "Drama"],
    rating: 9.0,
    poster: "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBhLWEzMDEtMzg4MjBiNGYwNjljXkEyXkFqcGc@._V1_SX300.jpg",
    overview: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before voting.",
    reviews: [
      { text: "Proof that incredible cinema needs nothing but great writing and acting.", sentiment: "positive", score: 0.96 },
      { text: "Henry Fonda carries one of the greatest films ever with quiet dignity.", sentiment: "positive", score: 0.92 },
      { text: "Feels stagey and dated by modern standards.", sentiment: "negative", score: -0.3 },
    ],
  },
  {
    id: 43, title: "Dune", year: 2021,
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    rating: 8.0,
    poster: "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    overview: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    reviews: [
      { text: "Denis Villeneuve delivers a stunning visual epic.", sentiment: "positive", score: 0.93 },
      { text: "The scale and ambition are unprecedented in modern sci-fi.", sentiment: "positive", score: 0.9 },
      { text: "Feels incomplete since it's only half the story.", sentiment: "negative", score: -0.4 },
      { text: "Hans Zimmer's score is otherworldly.", sentiment: "positive", score: 0.85 },
    ],
  },
  {
    id: 44, title: "Spider-Man: Into the Spider-Verse", year: 2018,
    genres: ["Animation", "Action", "Adventure"],
    rating: 8.4,
    poster: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    overview: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    reviews: [
      { text: "The best Spider-Man movie ever made. Revolutionary animation.", sentiment: "positive", score: 0.96 },
      { text: "Every frame is a work of art. Visually groundbreaking.", sentiment: "positive", score: 0.94 },
      { text: "Proves animation is not just for kids.", sentiment: "positive", score: 0.82 },
    ],
  },
  {
    id: 45, title: "The Sixth Sense", year: 1999,
    genres: ["Drama", "Mystery", "Thriller"],
    rating: 8.1,
    poster: "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3YTctYzQ0YjA0MjQyMzY3XkEyXkFqcGc@._V1_SX300.jpg",
    overview: "A boy who communicates with spirits seeks the help of a disheartened child psychologist.",
    reviews: [
      { text: "The twist ending is one of the greatest in cinema history.", sentiment: "positive", score: 0.93 },
      { text: "Bruce Willis and Haley Joel Osment are remarkable together.", sentiment: "positive", score: 0.88 },
      { text: "Loses all rewatch value once you know the ending.", sentiment: "negative", score: -0.45 },
    ],
  },
  {
    id: 46, title: "Black Panther", year: 2018,
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 7.3,
    poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
    overview: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
    reviews: [
      { text: "A cultural milestone and a thrilling superhero film.", sentiment: "positive", score: 0.92 },
      { text: "Michael B. Jordan as Killmonger is one of the MCU's best villains.", sentiment: "positive", score: 0.89 },
      { text: "The CGI in the final battle is disappointing.", sentiment: "negative", score: -0.4 },
      { text: "More than a movie — it's a movement.", sentiment: "positive", score: 0.85 },
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

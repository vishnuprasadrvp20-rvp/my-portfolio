"use client";

import { useState } from "react";

const movies = [

  {
    title: "Anbe Sivam",
    year: 2003,
    genre: "Comedy / Drama",
    rating: 5,
  },
  {
    title: "Harry Potter Film Series",
    year: 2001,
    genre: "Fantasy",
    rating: 4.5,
  },
  {
    title: "Minnal Murali",
    year: 2021,
    genre: "Comedy / Action",
    rating: 4.6,
  },
  {
    title: "Godha",
    year: 2017,
    genre: "Sports / Drama",
    rating: 4.5,
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action / Sci-Fi",
    rating: 4,
  },
  {
    title: "Meiyazhagan",
    year: 2024,
    genre: "Drama",
    rating: 5,
  },
  {
    title: "Jana Gana Mana",
    year: 2022,
    genre: "Thriller / Crime",
    rating: 4.5,
  },
    {
    title: "Panchatanthiram",
    year: 2002,
    genre: "Comedy",
    rating: 4.5,
  }
];

const books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    rating: 4.2,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    rating: 4.5,
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    rating: 4.7,
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    rating: 5,
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    rating: 4.5,
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    rating: 5,
  },
];


const movieChallenges = [
  {
    movie: "Panchathanthiram",
    clues: [
      "An important female character dies and comes back to life.",
      "The hero and his friends mistakenly believe that they have killed someone.",
      "The hero and heroine get separated and reunite at the end.",
      "The hero will do anything for his friends.",
    ],
  },

  {
    movie: "Avatar",
    clues: [
      "The hero is sent as a spy to infiltrate enemy territory.",
      "The hero joins the enemy's side and fights against his own team.",
      "The hero falls in love with a girl from the enemy territory.",
      "The hero mostly uses guns to fight, while the heroine uses a bow and arrows.",
    ],
  },

  {
    movie: "Anniyan",
    clues: [
      "The heroine rejects the hero's proposal but accepts him after he tries to kill her.",
      "The hero is a murderer and is also a lawyer and a model.",
      "The hero fights more than 50 martial arts experts without knowing any martial arts and defeats them.",
      "The hero murders people because of events from his past and present.",
    ],
  },

  {
    movie: "Nanban",
    clues: [
      "Three friends form a strong friendship.",
      "The story takes place largely around a college.",
      "One friend constantly challenges the traditional education system.",
      "One of the friends comes close to death.",
    ],
  },
];


function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-400">★</span>

      <span className="text-sm font-medium text-gray-300">
        {rating}/5
      </span>
    </div>
  );
}

export default function PersonalPage() {
  const [movieCount, setMovieCount] = useState(3);
  const [bookCount, setBookCount] = useState(3);

  const visibleMovies = movies.slice(0, movieCount);
  const visibleBooks = books.slice(0, bookCount);

  const [challengeIndex, setChallengeIndex] = useState(0);
  const [clueIndex, setClueIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const challenge = movieChallenges[challengeIndex];

  const checkAnswer = () => {
    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = challenge.movie.trim().toLowerCase();

    if (!userAnswer) {
      setMessage("⚠️ Please enter a movie name.");
      return;
    }

    if (userAnswer === correctAnswer) {
      setScore((current) => current + 1);
      setMessage("✅ Correct! Great guess! 🎉");
      setShowAnswer(true);
    } else {
      setMessage("❌ Wrong answer! Try another clue.");
    }
  };

  const nextMovie = () => {
    const nextIndex =
      (challengeIndex + 1) % movieChallenges.length;

    setChallengeIndex(nextIndex);
    setClueIndex(0);
    setAnswer("");
    setMessage("");
    setShowAnswer(false);
  };

  const nextClue = () => {
    if (clueIndex < challenge.clues.length - 1) {
      setClueIndex((current) => current + 1);
      setMessage("");
    }
  };

  const previousClue = () => {
    if (clueIndex > 0) {
      setClueIndex((current) => current - 1);
      setMessage("");
    }
  };

  const revealAnswer = () => {
    setShowAnswer(true);
    setMessage(`🎬 The answer is ${challenge.movie}`);
  };

  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Beyond Coding
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Personal <span className="text-red-500">Space</span>
          </h1>

          <div className="mt-5 h-1 w-24 bg-red-700" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A little glimpse into the things I enjoy outside of
            software development — movies, books and stories that
            caught my attention.
          </p>
        </div>

        {/* ================= MOVIES ================= */}

        <section>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                What I Watch
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                🎬 Movies I've Watched
              </h2>
            </div>

            <p className="hidden text-sm text-gray-500 sm:block">
              {movies.length} movies
            </p>
          </div>

          {/* Movie Cards */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {visibleMovies.map((movie) => (
              <div
                key={movie.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-red-800 hover:bg-red-950/10"
              >
                {/* Poster Placeholder */}

                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-red-950/60 via-black to-black">
                  <span className="text-5xl opacity-40 transition group-hover:scale-110 group-hover:opacity-70">
                    🎬
                  </span>
                </div>

                {/* Details */}

                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <h3 className="text-xl font-semibold">
                      {movie.title}
                    </h3>

                    <Rating rating={movie.rating} />

                  </div>

                  <div className="mt-3 flex gap-2 text-sm text-gray-500">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Show More Movies */}

          {movieCount < movies.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() =>
                  setMovieCount((current) =>
                    Math.min(current + 6, movies.length)
                  )
                }
                className="rounded-lg border border-red-800 bg-red-950/20 px-8 py-3 text-sm font-medium text-red-400 transition hover:border-red-500 hover:bg-red-900/30 hover:text-white"
              >
                Show More Movies ↓
              </button>
            </div>
          )}

        </section>

        {/* ================= BOOKS ================= */}

        <section className="mt-24">

          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-red-400">
              What I Read
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              📚 Books I've Read
            </h2>
          </div>

          {/* Book Cards */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {visibleBooks.map((book) => (
              <div
                key={book.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-800 hover:bg-red-950/10"
              >

                {/* Book Cover Placeholder */}

                <div className="mb-6 flex h-20 w-16 items-center justify-center rounded-r-lg bg-gradient-to-br from-red-800 to-red-950 shadow-lg transition group-hover:scale-105">
                  <span className="text-2xl">
                    📖
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-xl font-semibold">
                    {book.title}
                  </h3>

                  <Rating rating={book.rating} />

                </div>

                <p className="mt-3 text-gray-500">
                  {book.author}
                </p>

              </div>
            ))}

          </div>

          {/* Show More Books */}

          {bookCount < books.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() =>
                  setBookCount((current) =>
                    Math.min(current + 6, books.length)
                  )
                }
                className="rounded-lg border border-red-800 bg-red-950/20 px-8 py-3 text-sm font-medium text-red-400 transition hover:border-red-500 hover:bg-red-900/30 hover:text-white"
              >
                Show More Books ↓
              </button>
            </div>
          )}

        </section>

        {/* ================= QUOTE ================= */}

        <section className="mt-24">

          <div className="rounded-2xl border border-red-900/30 bg-red-950/10 p-10 text-center md:p-16">

            <p className="text-2xl font-medium leading-relaxed text-gray-200 md:text-3xl">
              "Good stories, good books and good code
              <span className="text-red-500">
                {" "}make life interesting.
              </span>"
            </p>

            <p className="mt-5 text-sm uppercase tracking-widest text-gray-500">
              — Vishnu Prasad
            </p>

          </div>

        </section>

        {/* =====================================================
    GUESS THE MOVIE CHALLENGE
===================================================== */}

        <section className="mt-24">

          {/* Section Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                Test Your Movie Knowledge
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                🎬 Guess the Movie
              </h2>

              <div className="mt-4 h-1 w-20 bg-red-700" />
            </div>

            {/* Score */}
            <div className="w-fit rounded-xl border border-red-900/40 bg-red-950/20 px-5 py-3">
              <span className="text-sm text-gray-500">
                Score
              </span>

              <span className="ml-3 text-lg font-bold text-red-400">
                {score}
              </span>
            </div>

          </div>


          {/* Game Card */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

            {/* =================================================
        GAME HEADER
    ================================================= */}

            <div className="border-b border-white/10 bg-black/20 px-6 py-5 md:px-8">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Movie Challenge #{challengeIndex + 1}
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Can you guess the movie?
                  </p>
                </div>

                {!showAnswer && (
                  <div className="shrink-0 rounded-full border border-red-900/40 bg-red-950/20 px-4 py-2 text-xs font-medium text-red-400">
                    Clue {clueIndex + 1} / {challenge.clues.length}
                  </div>
                )}

              </div>

            </div>


            {/* =================================================
        GAME CONTENT
    ================================================= */}

            <div className="p-6 md:p-8">

              {/* =================================================
          CLUE
      ================================================= */}

              {!showAnswer && (
                <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/40 text-sm font-bold text-red-400">
                      {clueIndex + 1}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Current Clue
                      </p>

                      <p className="text-sm font-semibold text-red-400">
                        Clue {clueIndex + 1}
                      </p>
                    </div>

                  </div>


                  <p className="mt-6 text-lg leading-8 text-gray-200 md:text-xl">
                    {challenge.clues[clueIndex]}
                  </p>

                </div>
              )}


              {/* =================================================
          CLUE NAVIGATION
      ================================================= */}

              {!showAnswer && (
                <div className="mt-5 flex items-center justify-between gap-4">

                  {/* Previous */}
                  <button
                    onClick={previousClue}
                    disabled={clueIndex === 0}
                    className={`rounded-lg border px-5 py-3 text-sm font-medium transition ${clueIndex === 0
                        ? "cursor-not-allowed border-white/5 text-gray-700"
                        : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-red-700 hover:bg-red-950/20 hover:text-white"
                      }`}
                  >
                    ← Previous
                  </button>


                  {/* Clue Indicators */}
                  <div className="hidden items-center gap-2 sm:flex">
                    {challenge.clues.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setClueIndex(index);
                          setMessage("");
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${index === clueIndex
                            ? "w-8 bg-red-500"
                            : "w-2 bg-gray-700 hover:bg-gray-500"
                          }`}
                        aria-label={`Go to clue ${index + 1}`}
                      />
                    ))}
                  </div>


                  {/* Next */}
                  <button
                    onClick={nextClue}
                    disabled={clueIndex === challenge.clues.length - 1}
                    className={`rounded-lg border px-5 py-3 text-sm font-medium transition ${clueIndex === challenge.clues.length - 1
                        ? "cursor-not-allowed border-white/5 text-gray-700"
                        : "border-red-900/40 bg-red-950/20 text-red-400 hover:border-red-500 hover:bg-red-900/20 hover:text-white"
                      }`}
                  >
                    Next Clue →
                  </button>

                </div>
              )}


              {/* =================================================
          ANSWER INPUT
      ================================================= */}

              {!showAnswer && (
                <div className="mt-8">

                  <label className="mb-2 block text-sm text-gray-500">
                    What's your guess?
                  </label>

                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                      setMessage("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        checkAnswer();
                      }
                    }}
                    placeholder="Type the movie name..."
                    className="w-full rounded-lg border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />


                  {/* Buttons */}
                  <div className="mt-4 flex flex-wrap gap-3">

                    {/* Guess */}
                    <button
                      onClick={checkAnswer}
                      className="rounded-lg bg-red-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600 hover:shadow-lg hover:shadow-red-900/20"
                    >
                      Guess Movie →
                    </button>


                    {/* Show Answer */}
                    <button
                      onClick={revealAnswer}
                      className="rounded-lg border border-red-900/40 bg-red-950/10 px-6 py-3 text-sm font-medium text-red-400 transition hover:border-red-500 hover:bg-red-900/20 hover:text-white"
                    >
                      👀 Show Answer
                    </button>

                  </div>

                </div>
              )}


              {/* =================================================
          TOAST / MESSAGE
      ================================================= */}

              {message && !showAnswer && (
                <div
                  className={`mt-5 rounded-lg border px-5 py-4 text-center text-sm font-medium transition-all ${message.startsWith("✅")
                      ? "border-green-900/40 bg-green-950/20 text-green-400"
                      : message.startsWith("⚠️")
                        ? "border-yellow-900/40 bg-yellow-950/20 text-yellow-400"
                        : "border-red-900/40 bg-red-950/20 text-red-400"
                    }`}
                >
                  {message}
                </div>
              )}


              {/* =================================================
          ANSWER REVEALED
      ================================================= */}

              {showAnswer && (
                <div className="rounded-xl border border-red-900/40 bg-red-950/20 p-8 text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-900/30 text-3xl">
                    🎬
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-gray-500">
                    The Movie Was
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-red-400 md:text-4xl">
                    {challenge.movie}
                  </h3>

                  <p className="mx-auto mt-4 max-w-md text-gray-500">
                    {message.startsWith("🎬")
                      ? "Now you know the answer. Ready for another challenge?"
                      : "Great job! Ready for another challenge?"}
                  </p>


                  {/* Next Movie */}
                  <button
                    onClick={nextMovie}
                    className="mt-7 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                  >
                    Next Movie →
                  </button>

                </div>
              )}

            </div>
          </div>

        </section>

      </div>
    </main>
  );
}
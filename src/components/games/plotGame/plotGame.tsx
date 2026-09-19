"use client";

import { useState } from "react";

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

export default function PlotGame() {
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
    <section className="mt-16 w-full sm:mt-20 md:mt-24">

      {/* =========================
          SECTION HEADER
      ========================== */}
      <div className="mb-6 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-red-400 sm:text-sm sm:tracking-[0.25em]">
            Test Your Movie Knowledge
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            🎬 Guess the Movie
          </h2>

          <div className="mt-4 h-1 w-16 bg-red-700 sm:w-20" />
        </div>

        {/* Score */}
        <div className="flex w-fit items-center rounded-xl border border-red-900/40 bg-red-950/20 px-4 py-2.5 sm:px-5 sm:py-3">
          <span className="text-xs text-gray-500 sm:text-sm">
            Score
          </span>

          <span className="ml-3 text-base font-bold text-red-400 sm:text-lg">
            {score}
          </span>
        </div>

      </div>


      {/* =========================
          GAME CARD
      ========================== */}
      <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] sm:rounded-2xl">

        {/* Game Header */}
        <div className="border-b border-white/10 bg-black/20 px-4 py-4 sm:px-6 sm:py-5 md:px-8">

          <div className="flex items-center justify-between gap-3">

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:text-xs sm:tracking-[0.2em]">
                Movie Challenge #{challengeIndex + 1}
              </p>

              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Can you guess the movie?
              </p>
            </div>

            {!showAnswer && (
              <div className="shrink-0 rounded-full border border-red-900/40 bg-red-950/20 px-3 py-1.5 text-[10px] font-medium text-red-400 sm:px-4 sm:py-2 sm:text-xs">
                Clue {clueIndex + 1} / {challenge.clues.length}
              </div>
            )}

          </div>

        </div>


        {/* =========================
            GAME CONTENT
        ========================== */}
        <div className="p-4 sm:p-6 md:p-8">

          {/* =========================
              CLUE
          ========================== */}
          {!showAnswer && (
            <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-4 sm:p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-900/40 text-sm font-bold text-red-400 sm:h-10 sm:w-10">
                  {clueIndex + 1}
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:text-xs sm:tracking-[0.2em]">
                    Current Clue
                  </p>

                  <p className="text-xs font-semibold text-red-400 sm:text-sm">
                    Clue {clueIndex + 1}
                  </p>
                </div>

              </div>

              <p className="mt-5 text-base leading-7 text-gray-200 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
                {challenge.clues[clueIndex]}
              </p>

            </div>
          )}


          {/* =========================
              CLUE NAVIGATION
          ========================== */}
          {!showAnswer && (
            <div className="mt-4 flex items-center justify-between gap-2 sm:mt-5 sm:gap-4">

              {/* Previous */}
              <button
                onClick={previousClue}
                disabled={clueIndex === 0}
                className={`shrink-0 rounded-lg border px-3 py-2.5 text-xs font-medium transition sm:px-5 sm:py-3 sm:text-sm ${
                  clueIndex === 0
                    ? "cursor-not-allowed border-white/5 text-gray-700"
                    : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-red-700 hover:bg-red-950/20 hover:text-white"
                }`}
              >
                <span className="sm:hidden">←</span>
                <span className="hidden sm:inline">← Previous</span>
              </button>


              {/* Clue Indicators */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {challenge.clues.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setClueIndex(index);
                      setMessage("");
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === clueIndex
                        ? "w-6 bg-red-500 sm:w-8"
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
                className={`shrink-0 rounded-lg border px-3 py-2.5 text-xs font-medium transition sm:px-5 sm:py-3 sm:text-sm ${
                  clueIndex === challenge.clues.length - 1
                    ? "cursor-not-allowed border-white/5 text-gray-700"
                    : "border-red-900/40 bg-red-950/20 text-red-400 hover:border-red-500 hover:bg-red-900/20 hover:text-white"
                }`}
              >
                <span className="sm:hidden">→</span>
                <span className="hidden sm:inline">Next Clue →</span>
              </button>

            </div>
          )}


          {/* =========================
              ANSWER INPUT
          ========================== */}
          {!showAnswer && (
            <div className="mt-6 sm:mt-8">

              <label className="mb-2 block text-xs text-gray-500 sm:text-sm">
                What&apos;s your guess?
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
                className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 sm:px-5 sm:py-4 sm:text-base"
              />


              {/* Buttons */}
              <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:flex-row">

                {/* Guess */}
                <button
                  onClick={checkAnswer}
                  className="w-full rounded-lg bg-red-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-600 hover:shadow-lg hover:shadow-red-900/20 sm:w-auto"
                >
                  Guess Movie →
                </button>

                {/* Show Answer */}
                <button
                  onClick={revealAnswer}
                  className="w-full rounded-lg border border-red-900/40 bg-red-950/10 px-6 py-3 text-sm font-medium text-red-400 transition hover:border-red-500 hover:bg-red-900/20 hover:text-white sm:w-auto"
                >
                  👀 Show Answer
                </button>

              </div>

            </div>
          )}


          {/* =========================
              MESSAGE
          ========================== */}
          {message && !showAnswer && (
            <div
              className={`mt-4 rounded-lg border px-4 py-3 text-center text-xs font-medium transition-all sm:mt-5 sm:px-5 sm:py-4 sm:text-sm ${
                message.startsWith("✅")
                  ? "border-green-900/40 bg-green-950/20 text-green-400"
                  : message.startsWith("⚠️")
                    ? "border-yellow-900/40 bg-yellow-950/20 text-yellow-400"
                    : "border-red-900/40 bg-red-950/20 text-red-400"
              }`}
            >
              {message}
            </div>
          )}


          {/* =========================
              ANSWER REVEALED
          ========================== */}
          {showAnswer && (
            <div className="rounded-xl border border-red-900/40 bg-red-950/20 p-5 text-center sm:p-8">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-900/30 text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                🎬
              </div>

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:mt-5 sm:text-sm sm:tracking-[0.25em]">
                The Movie Was
              </p>

              <h3 className="mt-2 break-words text-2xl font-bold text-red-400 sm:mt-3 sm:text-3xl md:text-4xl">
                {challenge.movie}
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:mt-4 sm:text-base">
                {message.startsWith("🎬")
                  ? "Now you know the answer. Ready for another challenge?"
                  : "Great job! Ready for another challenge?"}
              </p>

              {/* Next Movie */}
              <button
                onClick={nextMovie}
                className="mt-6 w-full rounded-lg bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 sm:mt-7 sm:w-auto"
              >
                Next Movie →
              </button>

            </div>
          )}

        </div>
      </div>

    </section>
  );
}
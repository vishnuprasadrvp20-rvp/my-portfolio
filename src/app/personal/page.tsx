"use client";

import BookSection from "@/components/books/books";
import AllGames from "@/components/games/allGames";
import MoviesSection from "@/components/movies/movies";
import { useState } from "react";
import { useRouter } from 'next/navigation';


export default function PersonalPage() {
  const router = useRouter();

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
        <MoviesSection />
        <BookSection />
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
        {/* <AllGames /> */}

          <section className="mx-auto mt-24 max-w-6xl px-6 pb-20">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-red-400">
          Have Some Fun
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          🎮 Games
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Take a break and play some simple games.
        </p>

        <button onClick={() => router.push('/games')} className="mt-20">
            <div className="mt-20 rounded-md bg-red-500 px-8 py-4 font-medium text-black transition hover:bg-red-400">
              Play Games
            </div >
            </button>
      </div>
      </section>
      </div>
    </main>
  );
}
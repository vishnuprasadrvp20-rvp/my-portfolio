"use client";

import BookSection from "@/components/books/books";
import AllGames from "@/components/games/allGames";
import MoviesSection from "@/components/movies/movies";
import { useState } from "react";


export default function GamePage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <AllGames />
      </div>
    </main>
  );
}
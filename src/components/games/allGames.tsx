"use client";

import { useEffect, useState } from "react";
import PlotGame from "./plotGame/plotGame";
import TicTacToe from "./tictactoe/tictactoe";
import SnakeBattle from "../snakeGame/snakeGame";

export default function AllGames() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <section className="mx-auto  max-w-6xl px-6 pb-20">
       {selectedGame==null ? <>
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
      </div>

      {/* Game Categories */}
      <div className="grid gap-8 md:grid-cols-2">

        {/* Single Player */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">
              👤 Single Player
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Games you can play by yourself.
            </p>
          </div>

          <div className="space-y-4">

            {/* Guess the Movie */}
            <button
              onClick={() => setSelectedGame("movie")}
              className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-2xl">
                  🎬
                </span>

                <div>
                  <h4 className="font-medium text-white">
                    Guess the Movie
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    Can you guess the movie from the clues?
                  </p>
                </div>
              </div>

              <span className="text-xl text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-400">
                →
              </span>
            </button>

            {/* Tic Tac Toe */}
            <button
              onClick={() => setSelectedGame("tic-tac-toe")}
              className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-2xl">
                  ❌
                </span>

                <div>
                  <h4 className="font-medium text-white">
                    Tic Tac Toe
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    Challenge yourself against the computer.
                  </p>
                </div>
              </div>

              <span className="text-xl text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-400">
                →
              </span>
            </button>

          </div>
        </div>

        {/* Two Player */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
          <div className="mb-6" onClick={() => setSelectedGame("snake-game")}>
            <h3 className="text-xl font-semibold text-white">
              👥 Two Player
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Games to play with another person.
            </p>
          </div>

          <div className="flex min-h-[150px] items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02]">
            <div className="text-center">
              <div className="mb-3 text-3xl">🔒</div>

              <h4 className="font-medium text-gray-300">
                Coming Soon
              </h4>

              <p className="mt-1 text-sm text-gray-600">
                More games are on the way.
              </p>
            </div>
          </div>
        </div>

      </div>
       
       </> : <></> } 

      {/* Selected Game */}
      {selectedGame && (
        <div className=" rounded-2xl border border-red-500/20 bg-black/50 p-6">
          <button
            onClick={() => setSelectedGame(null)}
            className="mb-6 text-sm text-gray-400 transition hover:text-red-400"
          >
            ← Back to Games
          </button>

          {selectedGame === "movie" && (
            <div className="text-center text-white">
              <PlotGame />
            </div>
          )}

          {selectedGame === "tic-tac-toe" && (
            <div className="text-center text-white">
              <TicTacToe/>
            </div>
          )}

          {selectedGame === "snake-game" && (
            <div className="text-center text-white">
              <SnakeBattle/>
            </div>
          )}
          
        </div>
      )}
    </section>
  );
}
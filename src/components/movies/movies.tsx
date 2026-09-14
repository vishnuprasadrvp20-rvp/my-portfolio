"use client";

import { useEffect, useState } from "react";

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

export default function MoviesSection() {
    const [movieCount, setMovieCount] = useState(3);

    const visibleMovies = movies.slice(0, movieCount);

    return (
        <>
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
        </>
    );
}
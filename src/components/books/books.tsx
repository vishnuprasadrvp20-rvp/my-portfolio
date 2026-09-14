"use client";

import { useEffect, useState } from "react";

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

export default function BookSection() {

    const [bookCount, setBookCount] = useState(3);
    const visibleBooks = books.slice(0, bookCount);

    return (
        <>
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
        </>
    );
}
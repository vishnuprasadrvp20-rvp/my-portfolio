"use client";

import { useState } from "react";

type Player = "X" | "O";
type Difficulty = "Easy" | "Medium" | "Hard";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: (Player | null)[]) {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return {
        winner: board[a],
        combination,
      };
    }
  }

  if (board.every((cell) => cell !== null)) {
    return {
      winner: "draw" as const,
      combination: [],
    };
  }

  return null;
}

function getRandomMove(board: (Player | null)[]) {
  const availableMoves = board
    .map((cell, index) => (cell === null ? index : null))
    .filter((index): index is number => index !== null);

  if (availableMoves.length === 0) {
    return null;
  }

  return availableMoves[
    Math.floor(Math.random() * availableMoves.length)
  ];
}

function minimax(
  board: (Player | null)[],
  isMaximizing: boolean
): number {
  const result = getWinner(board);

  if (result?.winner === "O") {
    return 10;
  }

  if (result?.winner === "X") {
    return -10;
  }

  if (result?.winner === "draw") {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = "O";

        const score = minimax(board, false);

        board[i] = null;

        bestScore = Math.max(bestScore, score);
      }
    }

    return bestScore;
  }

  let bestScore = Infinity;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = "X";

      const score = minimax(board, true);

      board[i] = null;

      bestScore = Math.min(bestScore, score);
    }
  }

  return bestScore;
}

function getBestMove(board: (Player | null)[]) {
  let bestScore = -Infinity;
  let bestMove: number | null = null;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = "O";

      const score = minimax(board, false);

      board[i] = null;

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<(Player | null)[]>(
    Array(9).fill(null)
  );

  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const [difficulty, setDifficulty] =
    useState<Difficulty>("Hard");

  const [winningCells, setWinningCells] = useState<number[]>([]);

  const [gameStatus, setGameStatus] = useState(
    "Your turn"
  );

  const [score, setScore] = useState({
    player: 0,
    computer: 0,
    draw: 0,
  });

  const [gameOver, setGameOver] = useState(false);

  const makeComputerMove = (
    currentBoard: (Player | null)[]
  ) => {
    let move: number | null = null;

    if (difficulty === "Easy") {
      move = getRandomMove(currentBoard);
    }

    if (difficulty === "Medium") {
      // First try to win
      move = findWinningMove(currentBoard, "O");

      // Otherwise block the player
      if (move === null) {
        move = findWinningMove(currentBoard, "X");
      }

      // Otherwise random
      if (move === null) {
        move = getRandomMove(currentBoard);
      }
    }

    if (difficulty === "Hard") {
      move = getBestMove(currentBoard);
    }

    if (move === null) {
      return;
    }

    const nextBoard = [...currentBoard];

    nextBoard[move] = "O";

    setBoard(nextBoard);

    const result = getWinner(nextBoard);

    if (result) {
      finishGame(result);
      return;
    }

    setIsPlayerTurn(true);
    setGameStatus("Your turn");
  };

  const findWinningMove = (
    currentBoard: (Player | null)[],
    player: Player
  ) => {
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === null) {
        const testBoard = [...currentBoard];

        testBoard[i] = player;

        const result = getWinner(testBoard);

        if (result?.winner === player) {
          return i;
        }
      }
    }

    return null;
  };

  const finishGame = (result: {
    winner: Player | "draw";
    combination: number[];
  }) => {
    setGameOver(true);
    setWinningCells(result.combination);

    if (result.winner === "X") {
      setGameStatus("🎉 You won!");
      setScore((current) => ({
        ...current,
        player: current.player + 1,
      }));
    } else if (result.winner === "O") {
      setGameStatus("🤖 Computer won!");
      setScore((current) => ({
        ...current,
        computer: current.computer + 1,
      }));
    } else {
      setGameStatus("🤝 It's a draw!");
      setScore((current) => ({
        ...current,
        draw: current.draw + 1,
      }));
    }
  };

  const handleCellClick = (index: number) => {
    if (!isPlayerTurn || board[index] || gameOver) {
      return;
    }

    const nextBoard = [...board];

    nextBoard[index] = "X";

    setBoard(nextBoard);

    const result = getWinner(nextBoard);

    if (result) {
      finishGame(result);
      return;
    }

    setIsPlayerTurn(false);
    setGameStatus("🤖 Computer is thinking...");

    setTimeout(() => {
      makeComputerMove(nextBoard);
    }, 500);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinningCells([]);
    setGameOver(false);
    setIsPlayerTurn(true);
    setGameStatus("Your turn");
  };

  return (
    <main className="min-h-[calc(100vh-80px)] px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center">

        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Game Zone
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            ❌ Tic Tac Toe
          </h1>

          <p className="mt-3 text-gray-400">
            You are <span className="font-semibold text-red-400">X</span>
            {" "}and the computer is{" "}
            <span className="font-semibold text-gray-300">O</span>
          </p>
        </div>

        {/* Score */}
        <div className="mb-8 grid w-full max-w-md grid-cols-3 gap-3">
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              You
            </p>

            <p className="mt-1 text-2xl font-bold text-red-400">
              {score.player}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Draw
            </p>

            <p className="mt-1 text-2xl font-bold text-white">
              {score.draw}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-500">
              Computer
            </p>

            <p className="mt-1 text-2xl font-bold text-gray-300">
              {score.computer}
            </p>
          </div>
        </div>

        {/* Difficulty */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-sm text-gray-400">
            Difficulty:
          </span>

          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value as Difficulty);
              resetGame();
            }}
            className="rounded-lg border border-white/10 bg-black px-4 py-2 text-sm text-white outline-none transition focus:border-red-500"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Game Board */}
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-2xl backdrop-blur-md md:p-6">

          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {board.map((cell, index) => {
              const isWinningCell =
                winningCells.includes(index);

              return (
                <button
                  key={index}
                  onClick={() => handleCellClick(index)}
                  disabled={
                    !!cell ||
                    !isPlayerTurn ||
                    gameOver
                  }
                  className={`flex aspect-square w-24 items-center justify-center rounded-xl border text-4xl font-bold transition-all duration-200 md:w-32 md:text-5xl ${
                    isWinningCell
                      ? "border-red-500 bg-red-500/20 shadow-lg shadow-red-500/20"
                      : "border-white/10 bg-white/[0.03] hover:border-red-500/50 hover:bg-red-500/10"
                  } ${
                    cell === "X"
                      ? "text-red-400"
                      : "text-gray-200"
                  }`}
                >
                  {cell}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status */}
        <div className="mt-6 min-h-8 text-center">
          <p className="text-lg font-medium text-gray-300">
            {gameStatus}
          </p>
        </div>

        {/* New Game */}
        <button
          onClick={resetGame}
          className="mt-4 rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-400"
        >
          🔄 New Game
        </button>

      </div>
    </main>
  );
}
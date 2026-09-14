"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

type Direction = {
  x: number;
  y: number;
};

type GameStatus = "waiting" | "playing" | "gameover";

const COLS = 30;
const ROWS = 20;
const WIN_SCORE = 10;
const GAME_SPEED = 110;

const INITIAL_SNAKE_1: Point[] = [
  { x: 5, y: 10 },
  { x: 4, y: 10 },
  { x: 3, y: 10 },
];

const INITIAL_SNAKE_2: Point[] = [
  { x: 24, y: 10 },
  { x: 25, y: 10 },
  { x: 26, y: 10 },
];

const INITIAL_DIRECTION_1: Direction = {
  x: 1,
  y: 0,
};

const INITIAL_DIRECTION_2: Direction = {
  x: -1,
  y: 0,
};

function samePoint(a: Point, b: Point) {
  return a.x === b.x && a.y === b.y;
}

function isOnSnake(point: Point, snake: Point[]) {
  return snake.some((segment) => samePoint(point, segment));
}

function createFood(
  snake1: Point[],
  snake2: Point[]
): Point {
  const occupied = [...snake1, ...snake2];

  const available: Point[] = [];

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const point = { x, y };

      if (!isOnSnake(point, occupied)) {
        available.push(point);
      }
    }
  }

  if (available.length === 0) {
    return { x: 15, y: 10 };
  }

  return available[
    Math.floor(Math.random() * available.length)
  ];
}

function isOppositeDirection(
  current: Direction,
  next: Direction
) {
  return (
    current.x + next.x === 0 &&
    current.y + next.y === 0
  );
}

export default function SnakeBattle() {
  const [snake1, setSnake1] = useState<Point[]>(
    INITIAL_SNAKE_1
  );

  const [snake2, setSnake2] = useState<Point[]>(
    INITIAL_SNAKE_2
  );

  const [direction1, setDirection1] = useState<Direction>(
    INITIAL_DIRECTION_1
  );

  const [direction2, setDirection2] = useState<Direction>(
    INITIAL_DIRECTION_2
  );

  const [food, setFood] = useState<Point>({
    x: 15,
    y: 10,
  });

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [status, setStatus] =
    useState<GameStatus>("waiting");

  const [winner, setWinner] = useState<string>("");

  const direction1Ref = useRef<Direction>(
    INITIAL_DIRECTION_1
  );

  const direction2Ref = useRef<Direction>(
    INITIAL_DIRECTION_2
  );

  const snake1Ref = useRef<Point[]>(INITIAL_SNAKE_1);
  const snake2Ref = useRef<Point[]>(INITIAL_SNAKE_2);

  const foodRef = useRef<Point>({
    x: 15,
    y: 10,
  });

  const score1Ref = useRef(0);
  const score2Ref = useRef(0);

  const statusRef = useRef<GameStatus>("waiting");

  const endGame = useCallback((message: string) => {
    setWinner(message);
    setStatus("gameover");

    statusRef.current = "gameover";
  }, []);

  const resetGame = useCallback(() => {
    const newSnake1 = [...INITIAL_SNAKE_1];
    const newSnake2 = [...INITIAL_SNAKE_2];

    const newFood = createFood(
      newSnake1,
      newSnake2
    );

    snake1Ref.current = newSnake1;
    snake2Ref.current = newSnake2;

    direction1Ref.current = INITIAL_DIRECTION_1;
    direction2Ref.current = INITIAL_DIRECTION_2;

    foodRef.current = newFood;

    score1Ref.current = 0;
    score2Ref.current = 0;

    setSnake1(newSnake1);
    setSnake2(newSnake2);

    setDirection1(INITIAL_DIRECTION_1);
    setDirection2(INITIAL_DIRECTION_2);

    setFood(newFood);

    setScore1(0);
    setScore2(0);

    setWinner("");
    setStatus("playing");

    statusRef.current = "playing";
  }, []);

  const updateGame = useCallback(() => {
    if (statusRef.current !== "playing") {
      return;
    }

    const currentSnake1 = snake1Ref.current;
    const currentSnake2 = snake2Ref.current;

    const currentDirection1 = direction1Ref.current;
    const currentDirection2 = direction2Ref.current;

    const currentFood = foodRef.current;

    const head1 = currentSnake1[0];
    const head2 = currentSnake2[0];

    const newHead1 = {
      x: head1.x + currentDirection1.x,
      y: head1.y + currentDirection1.y,
    };

    const newHead2 = {
      x: head2.x + currentDirection2.x,
      y: head2.y + currentDirection2.y,
    };

    // --------------------------------
    // Wall collision
    // --------------------------------

    const hitWall1 =
      newHead1.x < 0 ||
      newHead1.x >= COLS ||
      newHead1.y < 0 ||
      newHead1.y >= ROWS;

    const hitWall2 =
      newHead2.x < 0 ||
      newHead2.x >= COLS ||
      newHead2.y < 0 ||
      newHead2.y >= ROWS;

    if (hitWall1 && hitWall2) {
      endGame("🤝 Draw!");
      return;
    }

    if (hitWall1) {
      endGame("🔴 Player 2 Wins!");
      return;
    }

    if (hitWall2) {
      endGame("🟢 Player 1 Wins!");
      return;
    }

    // --------------------------------
    // Self collision
    // --------------------------------

    const selfCollision1 = currentSnake1
      .slice(1)
      .some((segment) =>
        samePoint(newHead1, segment)
      );

    const selfCollision2 = currentSnake2
      .slice(1)
      .some((segment) =>
        samePoint(newHead2, segment)
      );

    if (selfCollision1 && selfCollision2) {
      endGame("🤝 Draw!");
      return;
    }

    if (selfCollision1) {
      endGame("🔴 Player 2 Wins!");
      return;
    }

    if (selfCollision2) {
      endGame("🟢 Player 1 Wins!");
      return;
    }

    // --------------------------------
    // Snake vs snake collision
    // --------------------------------

    const snake1HitsSnake2 = currentSnake2.some(
      (segment) =>
        samePoint(newHead1, segment)
    );

    const snake2HitsSnake1 = currentSnake1.some(
      (segment) =>
        samePoint(newHead2, segment)
    );

    // Head-to-head collision
    const headToHead = samePoint(
      newHead1,
      newHead2
    );

    if (
      (snake1HitsSnake2 && snake2HitsSnake1) ||
      headToHead
    ) {
      endGame("🤝 Draw!");
      return;
    }

    if (snake1HitsSnake2) {
      endGame("🔴 Player 2 Wins!");
      return;
    }

    if (snake2HitsSnake1) {
      endGame("🟢 Player 1 Wins!");
      return;
    }

    // --------------------------------
    // Move snakes
    // --------------------------------

    const nextSnake1 = [
      newHead1,
      ...currentSnake1,
    ];

    const nextSnake2 = [
      newHead2,
      ...currentSnake2,
    ];

    const player1AteFood = samePoint(
      newHead1,
      currentFood
    );

    const player2AteFood = samePoint(
      newHead2,
      currentFood
    );

    // --------------------------------
    // Food eaten
    // --------------------------------

    if (player1AteFood) {
      const newScore = score1Ref.current + 1;

      score1Ref.current = newScore;
      setScore1(newScore);

      if (newScore >= WIN_SCORE) {
        snake1Ref.current = nextSnake1;
        setSnake1(nextSnake1);

        endGame("🏆 Player 1 Wins!");
        return;
      }
    } else {
      nextSnake1.pop();
    }

    if (player2AteFood) {
      const newScore = score2Ref.current + 1;

      score2Ref.current = newScore;
      setScore2(newScore);

      if (newScore >= WIN_SCORE) {
        snake2Ref.current = nextSnake2;
        setSnake2(nextSnake2);

        endGame("🏆 Player 2 Wins!");
        return;
      }
    } else {
      nextSnake2.pop();
    }

    // --------------------------------
    // Update snakes
    // --------------------------------

    snake1Ref.current = nextSnake1;
    snake2Ref.current = nextSnake2;

    setSnake1(nextSnake1);
    setSnake2(nextSnake2);

    // --------------------------------
    // New food
    // --------------------------------

    if (player1AteFood || player2AteFood) {
      const newFood = createFood(
        nextSnake1,
        nextSnake2
      );

      foodRef.current = newFood;
      setFood(newFood);
    }
  }, [endGame]);

  // Game loop
  useEffect(() => {
    if (status !== "playing") {
      return;
    }

    const interval = setInterval(
      updateGame,
      GAME_SPEED
    );

    return () => clearInterval(interval);
  }, [status, updateGame]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      // Start / restart
      if (event.code === "Space") {
        event.preventDefault();

        if (
          statusRef.current === "waiting" ||
          statusRef.current === "gameover"
        ) {
          resetGame();
        }

        return;
      }

      // Player 1
      let newDirection1: Direction | null = null;

      if (key === "w") {
        newDirection1 = { x: 0, y: -1 };
      }

      if (key === "s") {
        newDirection1 = { x: 0, y: 1 };
      }

      if (key === "a") {
        newDirection1 = { x: -1, y: 0 };
      }

      if (key === "d") {
        newDirection1 = { x: 1, y: 0 };
      }

      if (
        newDirection1 &&
        !isOppositeDirection(
          direction1Ref.current,
          newDirection1
        )
      ) {
        direction1Ref.current = newDirection1;
        setDirection1(newDirection1);
      }

      // Player 2
      let newDirection2: Direction | null = null;

      if (event.key === "ArrowUp") {
        newDirection2 = { x: 0, y: -1 };
      }

      if (event.key === "ArrowDown") {
        newDirection2 = { x: 0, y: 1 };
      }

      if (event.key === "ArrowLeft") {
        newDirection2 = { x: -1, y: 0 };
      }

      if (event.key === "ArrowRight") {
        newDirection2 = { x: 1, y: 0 };
      }

      if (
        newDirection2 &&
        !isOppositeDirection(
          direction2Ref.current,
          newDirection2
        )
      ) {
        direction2Ref.current = newDirection2;
        setDirection2(newDirection2);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [resetGame]);

  return (
    <main className="min-h-[calc(100vh-80px)] px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center">

        {/* Header */}
        <div className="mb-6 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-red-400">
            Two Player Game
          </p>

          <h1 className="text-3xl font-bold text-white md:text-5xl">
            🐍 Snake Battle
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            First player to reach 10 points wins
          </p>
        </div>

        {/* Score */}
        <div className="mb-5 flex w-full max-w-2xl items-center justify-between gap-4">

          {/* Player 1 */}
          <div className="flex-1 rounded-xl border border-green-500/20 bg-black/40 p-4 text-center">
            <p className="text-xs uppercase tracking-widest text-green-400">
              Player 1
            </p>

            <p className="mt-1 text-3xl font-bold text-green-400">
              {score1}
            </p>

            <p className="mt-1 text-xs text-gray-600">
              W A S D
            </p>
          </div>

          {/* VS */}
          <div className="text-sm font-bold text-gray-600">
            VS
          </div>

          {/* Player 2 */}
          <div className="flex-1 rounded-xl border border-red-500/20 bg-black/40 p-4 text-center">
            <p className="text-xs uppercase tracking-widest text-red-400">
              Player 2
            </p>

            <p className="mt-1 text-3xl font-bold text-red-400">
              {score2}
            </p>

            <p className="mt-1 text-xs text-gray-600">
              ↑ ↓ ← →
            </p>
          </div>

        </div>

        {/* Game Board */}
        <div
          className="relative grid overflow-hidden rounded-xl border border-white/10 bg-black/70"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
            width: "min(90vw, 1000px)",
            aspectRatio: `${COLS}/${ROWS}`,
          }}
        >
          {Array.from({
            length: COLS * ROWS,
          }).map((_, index) => {
            const x = index % COLS;
            const y = Math.floor(index / COLS);

            const point = { x, y };

            const snake1Index = snake1.findIndex(
              (segment) =>
                samePoint(segment, point)
            );

            const snake2Index = snake2.findIndex(
              (segment) =>
                samePoint(segment, point)
            );

            const isFood = samePoint(
              food,
              point
            );

            const isSnake1Head =
              snake1Index === 0;

            const isSnake2Head =
              snake2Index === 0;

            return (
              <div
                key={index}
                className="flex items-center justify-center border-[0.5px] border-white/[0.025]"
              >
                {/* Food */}
                {isFood && (
                  <div className="h-[55%] w-[55%] animate-pulse rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.7)]" />
                )}

                {/* Player 1 */}
                {snake1Index !== -1 && (
                  <div
                    className={`h-[80%] w-[80%] rounded-sm ${
                      isSnake1Head
                        ? "rounded-md bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]"
                        : "bg-green-600"
                    }`}
                  />
                )}

                {/* Player 2 */}
                {snake2Index !== -1 && (
                  <div
                    className={`h-[80%] w-[80%] rounded-sm ${
                      isSnake2Head
                        ? "rounded-md bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]"
                        : "bg-red-600"
                    }`}
                  />
                )}
              </div>
            );
          })}

          {/* Start Screen */}
          {status === "waiting" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="text-center">
                <div className="mb-4 text-5xl">
                  🐍🐍
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Snake Battle
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  First to 10 points wins
                </p>

                <button
                  onClick={resetGame}
                  className="mt-6 rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-400"
                >
                  Start Game
                </button>

                <p className="mt-4 text-xs text-gray-600">
                  Press SPACE to start
                </p>
              </div>
            </div>
          )}

          {/* Game Over */}
          {status === "gameover" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm">
              <div className="text-center">
                <div className="mb-4 text-5xl">
                  {winner.includes("Draw")
                    ? "🤝"
                    : "🏆"}
                </div>

                <h2 className="text-3xl font-bold text-white">
                  {winner}
                </h2>

                <p className="mt-3 text-gray-400">
                  Final Score
                </p>

                <p className="mt-1 text-2xl font-bold">
                  <span className="text-green-400">
                    {score1}
                  </span>

                  <span className="mx-3 text-gray-600">
                    -
                  </span>

                  <span className="text-red-400">
                    {score2}
                  </span>
                </p>

                <button
                  onClick={resetGame}
                  className="mt-6 rounded-lg bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-400"
                >
                  🔄 Play Again
                </button>

                <p className="mt-4 text-xs text-gray-600">
                  Press SPACE to restart
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="mt-6 grid w-full max-w-2xl gap-4 md:grid-cols-2">

          <div className="rounded-xl border border-green-500/10 bg-black/30 p-4">
            <p className="mb-2 text-sm font-semibold text-green-400">
              🟢 Player 1
            </p>

            <div className="flex gap-2 text-center text-xs text-gray-500">
              <span className="rounded bg-white/5 px-3 py-2">
                W
              </span>
              <span className="rounded bg-white/5 px-3 py-2">
                A
              </span>
              <span className="rounded bg-white/5 px-3 py-2">
                S
              </span>
              <span className="rounded bg-white/5 px-3 py-2">
                D
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-red-500/10 bg-black/30 p-4">
            <p className="mb-2 text-sm font-semibold text-red-400">
              🔴 Player 2
            </p>

            <div className="flex gap-2 text-center text-xs text-gray-500">
              <span className="rounded bg-white/5 px-3 py-2">
                ↑
              </span>
              <span className="rounded bg-white/5 px-3 py-2">
                ←
              </span>
              <span className="rounded bg-white/5 px-3 py-2">
                ↓
              </span>
              <span className="rounded bg-white/5 px-3 py-2">
                →
              </span>
            </div>
          </div>

        </div>

        <p className="mt-5 text-center text-xs text-gray-600">
          Eat the food 🍎 • Grow your snake • Avoid
          hitting bodies • First to 10 wins
        </p>

      </div>
    </main>
  );
}
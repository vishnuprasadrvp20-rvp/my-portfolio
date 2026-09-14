"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsVisible(true);

      const target = e.target as HTMLElement;

      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(!!interactiveElement);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out ${
          isHovering
            ? "h-6 w-6 border-red-400 bg-red-500/10"
            : "border-red-500/70"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Center Dot */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-1.5 w-1.5 rounded-full bg-red-500"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
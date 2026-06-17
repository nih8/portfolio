"use client";

import { useEffect, useState } from "react";

export default function Parallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      
      <h1
        style={{
          transform: `translate(${pos.x * 40}px, ${pos.y * 40}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        Floating Title
      </h1>

      <div
        style={{
          transform: `translate(${pos.x * -20}px, ${pos.y * -20}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        Floating Box
      </div>

    </div>
  );
}
"use client";

import { useState } from "react";

type Fact = {
  text: string;
};

const FACTS: Fact[] = [
  { text: "I overthink UI spacing more than I should" },
  { text: "I can code for hours without realizing time passed" },
  { text: "I love turning random ideas into UI experiments" },
  { text: "I usually fix bugs by accident after panicking" },
  { text: "I enjoy building things that feel alive" },
  { text: "I rearrange components 10 times before settling" },
];

type PinnedFact = {
  id: number;
  text: string;
  x: number;
  y: number;
  rot: number;
};

export default function FactMachine() {
  const [current, setCurrent] = useState<Fact | null>(null);
  const [pinned, setPinned] = useState<PinnedFact[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

  const generateFact = () => {
    setIsShuffling(true);

    setTimeout(() => {
      const random = FACTS[Math.floor(Math.random() * FACTS.length)];
      setCurrent(random);
      setIsShuffling(false);
    }, 800);
  };

  const pinFact = () => {
    if (!current) return;

    const newPin: PinnedFact = {
      id: Date.now(),
      text: current.text,
      x: 10 + Math.random() * 80, // % position
      y: 10 + Math.random() * 60,
      rot: -8 + Math.random() * 16,
    };

    setPinned((prev) => [...prev, newPin]);
    setCurrent(null);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "900px",
        height: "600px",
      }}
    >
      {/* 🧱 WALL BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #fdf7ff 0%, #f3e8ff 50%, #ede9fe 100%)",
          borderRadius: "20px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      />

      {/* subtle texture dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#00000010 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      {/* 📌 PINNED FACTS */}
      {pinned.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: `rotate(${p.rot}deg)`,
            background: "#fffdf8",
            padding: "10px 12px",
            borderRadius: "6px",
            fontFamily: "cursive",
            fontSize: "13px",
            boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
            maxWidth: "160px",
          }}
        >
          📌 {p.text}
        </div>
      ))}

      {/* 🎟️ MACHINE */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {/* machine body */}
        <div
          style={{
            width: "220px",
            height: "160px",
            background: "#fffdf8",
            borderRadius: "12px",
            boxShadow: "0 25px 60px rgba(124,58,237,0.25)",
            padding: "15px",
            fontFamily: "cursive",
          }}
        >
          <div style={{ fontSize: "18px", marginBottom: "10px" }}>
            ✿ fact machine
          </div>

          <button
            onClick={generateFact}
            disabled={isShuffling}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              background: isShuffling ? "#ccc" : "#a78bfa",
              color: "white",
              cursor: "pointer",
              fontFamily: "cursive",
            }}
          >
            {isShuffling ? "shuffling..." : "press for fact ✿"}
          </button>

          {/* ticket slot */}
          <div
            style={{
              marginTop: "12px",
              height: "40px",
              background: "#f5f3ff",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "#6b21a8",
            }}
          >
            {current ? "ticket ready ✿" : "waiting..."}
          </div>
        </div>

        {/* 🎟️ TICKET OUTPUT */}
        {current && (
          <div
            style={{
              marginTop: "20px",
              background: "#fffdf8",
              padding: "12px",
              borderRadius: "8px",
              fontFamily: "cursive",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              transform: "rotate(-2deg)",
              maxWidth: "220px",
            }}
          >
            {current.text}

            <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
              <button
                onClick={pinFact}
                style={{
                  flex: 1,
                  padding: "6px",
                  fontSize: "12px",
                  border: "none",
                  background: "#34d399",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontFamily: "cursive",
                }}
              >
                pin 📌
              </button>

              <button
                onClick={generateFact}
                style={{
                  flex: 1,
                  padding: "6px",
                  fontSize: "12px",
                  border: "none",
                  background: "#fbbf24",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontFamily: "cursive",
                }}
              >
                next 🎲
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
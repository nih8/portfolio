"use client";

import { useEffect, useRef, useState } from "react";

type Hobby = {
  icon: string;
  label: string;
  desc: string;
  color: string;
  angle: number;
};

const hobbies: Hobby[] = [
  { icon: "🏋️", label: "gym", desc: "lifting heavy things", color: "#a78bfa", angle: 0 },
  { icon: "🍜", label: "food", desc: "instant happiness", color: "#fbbf24", angle: 90 },
  { icon: "📺", label: "youtube", desc: "endless scroll", color: "#fb7185", angle: 180 },
  { icon: "🎮", label: "games", desc: "stress relief mode", color: "#34d399", angle: 270 },
];

export default function HobbyUniverseClean() {
  const [active, setActive] = useState<Hobby | null>(null);

  const orbitRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const radius = 140;

  useEffect(() => {
    let frame: number;

    const animate = () => {
      orbitRef.current += 0.3; // speed

      if (containerRef.current) {
        const nodes = containerRef.current.querySelectorAll("[data-planet]");

        nodes.forEach((node, i) => {
          const angle =
            hobbies[i].angle + orbitRef.current + Math.sin(orbitRef.current * 0.01 + i) * 10;

          const rad = (angle * Math.PI) / 180;

          const x = Math.cos(rad) * (radius + Math.sin(orbitRef.current * 0.01 + i) * 8);
          const y = Math.sin(rad) * (radius + Math.cos(orbitRef.current * 0.01 + i) * 8);

          (node as HTMLElement).style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        });
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {/* BACKDROP */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            zIndex: 50,
          }}
        />
      )}

      {/* ORBIT SYSTEM */}
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: "1000px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "420px",
          height: "420px",
        }}
      >
        {/* center */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fffdf8",
            padding: "14px 18px",
            borderRadius: "10px",
            fontFamily: "cursive",
            zIndex: 2,
          }}
        >
          ✿ my hobbies ✿
        </div>

        {/* planets */}
        {hobbies.map((hobby, i) => (
          <div
            key={i}
            data-planet
            onClick={() => setActive(hobby)}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
          >
            {/* glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: hobby.color,
                filter: "blur(18px)",
                opacity: 0.25,
                transform: "scale(1.6)",
                borderRadius: "50%",
              }}
            />

            {/* icon */}
            <div
              style={{
                fontSize: "30px",
                background: "#fffdf8",
                padding: "12px",
                borderRadius: "50%",
                border: `2px solid ${hobby.color}`,
                position: "relative",
                zIndex: 2,
              }}
            >
              {hobby.icon}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "320px",
            background: "#fffdf8",
            padding: "18px",
            borderRadius: "12px",
            zIndex: 100,
            fontFamily: "cursive",
          }}
        >
          <div style={{ fontSize: "32px", textAlign: "center" }}>
            {active.icon}
          </div>

          <h2 style={{ textAlign: "center" }}>{active.label}</h2>

          <p style={{ textAlign: "center" }}>{active.desc}</p>

          <button
            onClick={() => setActive(null)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#a78bfa",
              color: "white",
              cursor: "pointer",
            }}
          >
            close ✿
          </button>
        </div>
      )}
    </>
  );
}
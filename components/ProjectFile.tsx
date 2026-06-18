"use client";

import { useState } from "react";
import ProjectViewer from "@/components/ProjectViewer";

export default function ProjectFile({
  number,
  title,
  rotate,
}: {
  number: string;
  title: string;
  rotate: string;
}) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          border:"1px solid #b89fe3",
          width: "260px",
          height: "180px",
          background: "#f8f5ee",
          
          cursor: "pointer",
          padding: "25px",
          boxShadow: hover
            ? "0 25px 50px rgba(0,0,0,0.2)"
            : "0 15px 35px rgba(0,0,0,0.15)",

          transform: hover
            ? `rotate(${rotate}) translateY(-8px) scale(1.02)`
            : `rotate(${rotate}) translateY(0px) scale(1)`,

          transition: "all 0.25s ease",
          position: "relative",
        }}
      >
        {/* paper clip */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "20px",
            width: "30px",
            height: "50px",
            border: "3px solid #71717a",
            borderRadius: "20px",
            transform: hover
              ? "rotate(25deg) scale(1.05)"
              : "rotate(20deg) scale(1)",
            transition: "0.25s ease",
          }}
        />

        <p
          style={{
            fontSize: "12px",
            color: "#71717a",
            margin: 0,
            letterSpacing: hover ? "1px" : "0px",
            transition: "0.25s ease",
            fontWeight:900
          }}
        >
          PROJECT FILE {number}
        </p>

        <h2
          style={{
            fontFamily: "serif",
            color: "#27272a",
            marginTop: "20px",
            transform: hover ? "translateX(3px)" : "translateX(0px)",
            transition: "0.25s ease",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#52525b",
            opacity: hover ? 1 : 0.8,
            transform: hover ? "translateY(-2px)" : "translateY(0px)",
            transition: "0.25s ease",
            fontWeight:900
          }}
        >
          Click to open file →
        </p>
      </div>

      {open && (
        <ProjectViewer close={() => setOpen(false)} title={title} />
      )}
    </>
  );
}
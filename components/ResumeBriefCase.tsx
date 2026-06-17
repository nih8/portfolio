"use client";

import { useState } from "react";

export default function ResumeBriefcase() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open("YOUR_GOOGLE_DRIVE_LINK_HERE", "_blank");
  };

  return (
    <div
      style={{
        position: "relative",
        width: "120px",
        height: "120px",
        cursor: "pointer",
        top: "-2250px",
        left: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* label */}
      <div
        style={{
          position: "absolute",
          top: "-25px",
          fontSize: "12px",
          color: "white",
          opacity: hovered ? 1 : 0,
          transition: "0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        open my credentials →
      </div>

      {/* paper */}
      <div
        style={{
          position: "absolute",
          width: "60px",
          height: "70px",
          background: "#f5f5f5",
          top: "35px",
          borderRadius: "4px",
          transform: hovered ? "translateY(-5px)" : "translateY(20px)",
          opacity: hovered ? 1 : 0,
          transition: "all 0.3s ease",
          zIndex: -1,
        }}
      />

      {/* briefcase */}
      <div
        style={{
          width: "90px",
          height: "65px",
          background: "linear-gradient(145deg, #7a4a2d, #5a341f)",
          borderRadius: "8px",
          position: "relative",
          transition: "all 0.35s ease",

          transform: hovered
            ? "translateY(-12px) rotate(-3deg)"
            : "translateY(0px)",

          boxShadow: hovered
            ? "0 18px 40px rgba(0,0,0,0.35)"
            : "0 10px 25px rgba(0,0,0,0.35)",
        }}
      >
        {/* RESUME label */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -40%)",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "14px",
            letterSpacing: "2px",
            color: "rgba(255, 255, 255, 0.85)",
            fontWeight: 600,
            textTransform: "uppercase",
            pointerEvents: "none",
          }}
        >
          RESUME
        </div>

        {/* handle */}
        <div
          style={{
            position: "absolute",
            width: "35px",
            height: "10px",
            border: "3px solid #c9a26a",
            borderBottom: "none",
            borderRadius: "10px 10px 0 0",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* lock */}
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "#d4af37",
            borderRadius: "2px",
            bottom: "18px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* shine */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08), transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
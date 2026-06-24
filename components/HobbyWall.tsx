"use client";

import { createPortal } from "react-dom";

type Props = {
  close: () => void;
};

/* ---------------- Photo ---------------- */
function HobbyPhoto({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div
      style={{
        width: "140px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "8px",
        background: "rgba(255,255,255,0.92)",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        fontFamily: "Bradley hand itc",
        fontWeight: 900,
        position: "relative",
      }}
    >
      {/* violet tape (single color) */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%) rotate(-6deg)",
          width: "60px",
          height: "16px",
          background: "#7c3aed",
          borderRadius: "4px",
          opacity: 0.65,
          boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
        }}
      />

      <img
        src={image}
        style={{
          width: "100%",
          height: "100px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <p
        style={{
          margin: 0,
          fontSize: "12px",
          textAlign: "center",
          fontFamily: "cursive",
          color: "#4c1d95",
          fontWeight: 600,
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* ---------------- Text Block ---------------- */
function TextBlock({ text }: { text: string }) {
  return (
    <div
      style={{
        width: "140px",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "15px",
        color: "#26045d",
        textAlign: "center",
        textShadow: "0 2px 6px rgba(0,0,0,0.6)",
        fontFamily: '"Bradley Hand ITC","Caveat"',
              fontWeight:900,
      }}
    >
      {text}
    </div>
  );
}

/* ---------------- Main ---------------- */
export default function HobbyWall({ close }: Props) {
  return createPortal(
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        background: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      {/* close */}
      <button
        onClick={close}
        style={{
          position: "absolute",
          top: "25px",
          right: "30px",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          border: "none",
          background: "#fff",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        ✕
      </button>

      {/* BOARD */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "665px",
          height: "300px",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
          backgroundColor: "#e07ee1",
          display: "flex",
          gap: "14px",
          padding: "16px",
          alignItems: "center",
        }}
      >
        {/* stronger background lines */}
        {/* background lines (soft version) */}
<div
  style={{
    position: "absolute",
    inset: 0,
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(255,255,255,0.08) 0px,
        rgba(255,255,255,0.08) 1px,
        transparent 1px,
        transparent 8px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0,0,0,0.03) 0px,
        rgba(0,0,0,0.03) 1px,
        transparent 1px,
        transparent 10px
      )
    `,
    pointerEvents: "none",
    zIndex: 0,
  }}
/>

        {/* Column 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <HobbyPhoto image="/wall3.jpeg" text="" />
          <TextBlock text="Me and my friend dancing in an inter hostel competition" />
        </div>

        {/* Column 2 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextBlock text="Me during the intro session for our college's gaming club" />
          <HobbyPhoto image="/wall2.jpeg" text="" />
        </div>

        {/* Column 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <HobbyPhoto image="/gamingz.jpeg" text="" />
          <TextBlock text="Playing CODM with my friends :3" />
        </div>

        {/* Column 4 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextBlock text="Did a dance performance at the beginning of first year with people i dont know :P" />
          <HobbyPhoto image="/dance.jpeg" text="" />
        </div>
      </div>
    </div>,
    document.body
  );
}
"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function SurpriseBubble() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* 🫧 BUBBLE BUTTON */}
      <div
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "absolute",
          top: "30px",
          left: "300px",

          width: "75px",
          height: "75px",
          borderRadius: "50%",

          cursor: "pointer",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: 600,
          color: "#1f1f1f",

          background: hover
            ? "radial-gradient(circle at 30% 30%, #ffffff, #c7d2fe 40%, #818cf8 100%)"
            : "radial-gradient(circle at 30% 30%, #ffffff, #dbeafe 40%, #93c5fd 100%)",

          boxShadow: hover
            ? "0 18px 40px rgba(0,0,0,0.25)"
            : "0 10px 25px rgba(0,0,0,0.18)",

          transform: hover
            ? "translateY(-6px) scale(1.08) rotate(-3deg)"
            : "translateY(0px) scale(1)",

          transition: "all 0.25s ease",

          userSelect: "none",
        }}
      >
        SURPRISE
      </div>

      {/* 🖼️ MODAL (FIXED USING PORTAL) */}
      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 99999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                padding: "18px",
                borderRadius: "16px",
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                maxWidth: "300px",
              }}
            >
              <img
                src="/wall4.jpeg"
                alt="cute me"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />

              <p
                style={{
                  marginTop: "10px",
                  fontFamily: "Bradley Hand ITC",
                  fontWeight: 900,
                  fontSize: "18px",
                  color: "#444",
                }}
              >
                it's just a cute pic of me lol :P
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
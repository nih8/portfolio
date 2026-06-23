"use client";

import { useState } from "react";
import HobbyWall from "@/components/HobbyWall";

export default function HobbyNote() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
        style={{
          position: "absolute",
          top: "30px",
          left: "5%",
          width: "110px",
          height: "140px",
          borderRadius: "10%",
          background: "#ffffff",
          padding: "25px",
          cursor: "pointer",
          zIndex: 5,
          overflow: "hidden",
          border:"1px solid #b89fe3",

          /* ✨ animation added */
          transform: hover
            ? "rotate(-2deg) translateY(-10px) scale(1.03)"
            : "rotate(-5deg) translateY(0px) scale(1)",

          boxShadow: hover
            ? "0 25px 60px rgba(0,0,0,0.25)"
            : "0 20px 45px rgba(0,0,0,0.18)",

          transition: "all 0.35s ease",
        }}
      >
        {/* push pin */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: hover
              ? "translateX(-50%) scale(1.15)"
              : "translateX(-50%) scale(1)",
            width: "22px",
            height: "22px",
            background: "#9f3131",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
        />

        {/* notebook lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 28px, #4061e4 29px)",
            pointerEvents: "none",
            opacity: hover ? 1 : 0.8,
            transition: "0.3s ease",
          }}
        />

        {/* red margin */}
        <div
          style={{
            position: "absolute",
            left: "35px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "#a70000",
            opacity: hover ? 1 : 0.9,
            transition: "0.3s ease",
          }}
        />

        {/* content */}
        <div
          style={{
            position: "relative",
            marginLeft: "25px",
            fontFamily: 'inter',
            color: "#581c87",

            transform: hover ? "translateY(-2px)" : "translateY(0px)",
            transition: "0.3s ease",
          }}
        >
          <h4
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              letterSpacing: hover ? "1px" : "0px",
              transition: "0.3s ease",
              fontFamily:'"courier new","Space Mono"'
            }}
          >
            Hobbies
          </h4>

          <ul
            style={{
              fontSize: "14px",
              transform: hover ? "translateX(2px)" : "translateX(0px)",
              transition: "0.3s ease",
              fontFamily:'"georgia","Lora"'
            }}
          >
            <li>gaming</li>
            <li>dance</li>
            <li>youtube</li>
            <li>food:3</li>
          </ul>

          <p
            style={{
              fontSize: "13px",
              color: "#5400e4",
              opacity: hover ? 1 : 0.8,
              transform: hover ? "translateY(-2px)" : "translateY(0px)",
              transition: "0.3s ease",
              fontFamily:`"Bradley Hand ITC","Caveat"`,
              fontWeight:900

            }}
          >
            click for hobby wall →
          </p>
        </div>
      </div>

      {open && <HobbyWall close={() => setOpen(false)} />}
    </>
  );
}
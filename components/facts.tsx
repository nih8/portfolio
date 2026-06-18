"use client";

import { useState } from "react";

type FactProps = {
  fact: string;
  top: string;
  left: string;
  rotate: string;
  color: string;
};

export default function Fact({ fact, top, left, rotate, color }: FactProps) {
  const [revealed, setRevealed] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => setRevealed(!revealed)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        
        
        borderRadius:"5%",
        position: "absolute",
        top,
        left,

        width: "50px",
        height: "50px",

        background: color,
        padding: "15px",

        boxShadow: hover
          ? "0 18px 35px rgba(0,0,0,0.22)"
          : "0 10px 25px rgba(0,0,0,0.15)",

        transform: hover
          ? `rotate(${rotate}) translateY(-6px) scale(1.05)`
          : `rotate(${rotate}) translateY(0px) scale(1)`,

        transition: "all 0.25s ease",

        cursor: "pointer",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        textAlign: "center",
        fontFamily: "Bradley Hand ITC",
        fontWeight: 900,
        color: "#581c87",
        fontSize: "11px",
        userSelect: "none",
      }}
    >

     {/* tape top-left */}
<div
  style={{
    position:"absolute",

    top:"-3px",
    left:"-18px",

    width:"55px",
    height:"14px",

    background:color,
    opacity:0.55,

    transform:"rotate(-45deg)",

    boxShadow:"0 3px 6px rgba(0,0,0,0.12)",
  }}
/>


{/* tape top-right */}
<div
  style={{
    position:"absolute",

    top:"-6px",
    right:"-12px",

    width:"55px",
    height:"14px",

    background:color,
    opacity:0.55,

    transform:"rotate(45deg)",

    boxShadow:"0 3px 6px rgba(0,0,0,0.12)",
  }}
/>


      <div
        style={{
          transition: "all 0.25s ease",
          transform: revealed ? "scale(1.05)" : "scale(1)",
        }}
      >
        {revealed ? fact : "Click for a random fact"}
      </div>

    </div>
  );
}
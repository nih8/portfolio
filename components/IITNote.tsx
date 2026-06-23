"use client";

import { useState } from "react";

export default function IITNote() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",

        top: "240px",
        left: "200px",

        width: "130px",
        height: "110px",

        cursor: "default",

        transform: hover
          ? "rotate(2deg) translateY(-6px) scale(1.03)"
          : "rotate(-3deg)",

        transition: "all 0.25s ease",

        filter: hover
          ? "drop-shadow(0 18px 35px rgba(0,0,0,0.25))"
          : "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
      }}
    >
   
      {/* 📄 TORN PAPER */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#fcd602",

          clipPath:
            "polygon(0% 5%, 6% 0%, 14% 4%, 22% 0%, 35% 4%, 48% 0%, 62% 5%, 75% 2%, 88% 6%, 100% 2%, 100% 95%, 94% 100%, 82% 96%, 70% 100%, 58% 96%, 45% 100%, 33% 97%, 20% 100%, 10% 96%, 0% 100%)",

          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          height: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",

          fontFamily: "Inter, system-ui, sans-serif",
          color: "#2f2a1f",
          lineHeight: "1.3",
        }}
      >
        <div>
          <div style={{ fontSize: "20px",fontFamily:'"times new roman","Libre Baskerville"'}}>
            IIT J 2028
          </div>

          <div style={{ fontSize: "18px", marginTop: "0px" ,fontFamily:'"Bradley Hand ITC","Caveat"',fontWeight:900}}>
            CGPA: 8.24
          </div>
        </div>
      </div>
    </div>
  );
}
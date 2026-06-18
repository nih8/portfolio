"use client";

import { useState } from "react";

type Props = {
  image: string;
  text: string;
  top: string;
  left: string;
  rotate: string;
  size?: string;
  target?: string;
};

export default function MemoryPhoto({
  image,
  text,
  top,
  left,
  rotate,
  size = "130px",
  target,
}: Props){
  const [hover, setHover] = useState(false);

  return (
    <div
    onClick={() => {
    if (target) {
      document
        .getElementById(target)
        ?.scrollIntoView({
          behavior: "smooth",
          block :"start"
        });
    }
  }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        top,
        left,
        transform: hover
          ? "rotate(0deg) scale(1.08) translateY(-8px)"
          : `rotate(${rotate})`,
        transition: "all 0.35s ease",
        zIndex: hover ? 20 : 1,
        cursor: "pointer",
      }}
    >

      {/* tape */}
      <div
        style={{
          position: "absolute",
          top: "-14px",
          left: "50%",
          transform: "translateX(-50%) rotate(-3deg)",
          width: "55px",
          height: "18px",
          background: "rgba(254, 221, 73, 0.65)",
          borderRadius: "3px",
          zIndex: 3,
        }}
      />


      {/* scrapbook paper */}
      <div
        style={{
          background: "#fffdf8",
          padding: "12px",
          paddingBottom: "16px",
          borderRadius: "3px",
          boxShadow: hover
            ? "0 25px 50px rgba(124,58,237,0.25)"
            : "0 15px 35px rgba(0,0,0,0.18)",
          position: "relative",
        }}
      >

        <img
          src={image}
          alt=""
          style={{
            width: size,
            height: size,
            objectFit: "cover",
            display: "block",
            borderRadius: "2px",
          }}
        />


        {/* handwritten note */}
        <div
          style={{
            marginTop: "8px",
            textAlign: "center",
            fontFamily: "inter",
            color: "#6b21a8",
            fontSize: "13px",
          }}
        >
          {text}
        </div>


        {/* hover bubble */}
        <div
          style={{
            position: "absolute",
            bottom: "-35px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fef3c7",
            color: "#4c1d95",
            padding: "10px 14px",
            borderRadius: "16px",
            width: "150px",
            textAlign: "center",
            fontSize: "12px",

            opacity: hover ? 1 : 0,
            pointerEvents: "none",
            transition: "0.3s ease",

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.12)",
          }}
        >
          wanna know about me?
        </div>

      </div>

    </div>
  );
}
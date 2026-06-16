"use client";

import { useState } from "react";

type Props = {
  title: string;
  image: string;
  description: string;
  tech: string;
  demoLink?: string;
  githubLink?: string;
  top?: string;
left?: string;
rotate?: string;
};

export default function ProjectNote({
  title,
  image,
  description,
  tech,
  demoLink,
  githubLink,
  top,
  left,
  rotate,
}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position:"absolute",
        background: "#fffdf8",
        padding: "15px",
        width: "200px",
        borderRadius: "5px",
        top,
        left,
        

         transform: hover
          ? "rotate(0deg) scale(1.08) translateY(-8px)"
          : `rotate(${rotate})`,
        transition: "all 0.35s ease,box-shadow 0.5s ease",
        zIndex: hover ? 20 : 1,

        boxShadow: hover
          ? "0 25px 50px rgba(124,58,237,0.25)"
          : "0 15px 35px rgba(0,0,0,0.15)",
      }}
    >

      {/* yellow tape */}
      <div
        style={{
          width: "70px",
          height: "18px",
          background: "#fde68a",
          opacity: 0.85,
          margin: "-25px auto 10px",
          borderRadius: "3px",
        }}
      />


      {/* hover hint */}
      {hover && (
        <p
          style={{
            textAlign: "center",
            color: "#7c3aed",
            fontFamily: "cursive",
            fontSize: "12px",
            margin: "5px 0 10px",
          }}
        >
          🎥 click the preview to watch demo
        </p>
      )}


      {/* image preview */}
      <div
        onClick={() => {
          if (demoLink) {
            window.open(demoLink, "_blank");
          }
        }}
        style={{
          position: "relative",
          cursor: "pointer",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />


        {/* play button */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            color: "white",
            fontSize: "48px",

            textShadow:
              "0 4px 15px rgba(0,0,0,0.5)",

            pointerEvents: "none",
          }}
        >
          ▶
        </div>

      </div>


      <h5
        style={{
          color: "#581c87",
          fontFamily: "cursive",
          marginTop :"-1px",
          marginBottom: "5px",
        }}
      >
        {title} ✨
      </h5>


      <p
        style={{
          color: "#4c1d95",
          fontSize: "12px",
        }}
      >
        {description}
      </p>


      <small
        style={{
          color: "#7c3aed",
          fontSize: "12px",
        }}
      >
        {tech}
      </small>


      {githubLink && (
        <div
          style={{
            marginTop: "5px",
          }}
        >
          <a
            href={githubLink}
            target="_blank"
            style={{
              color: "#581c87",
              textDecoration: "none",
              fontSize: "12px",
            }}
          >
            💻 view code
          </a>
        </div>
      )}

    </div>
  );
}
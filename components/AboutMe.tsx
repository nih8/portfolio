"use client";

import { useState } from "react";

export default function AboutMe() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      id="about-me"
      style={{
        position: "absolute",
        top: "570px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "60px",
        alignItems: "center",
        scrollMarginTop:"50px",
      }}
    >
      {/* 📄 PAPER */}
      <div
        style={{
          width: "400px",
          minHeight:"300px",
          background: "#ede9fe",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
          position: "relative",
          transform: "rotate(-2deg)",
          animation: "wobble 4s ease-in-out infinite",
          fontFamily: '"Bradley Hand ITC","Segoe Print"',
          color: "#3b0764",
        }}
      >
        {/* tape left */}
        <div
          style={{
            position: "absolute",
            top: "-5px",
            left: "20px",
            width: "60px",
            height: "18px",
            background: "#fde68a",
            opacity: 0.85,
            transform: "rotate(-8deg)",
          }}
        />

        {/* tape right */}
        <div
          style={{
            position: "absolute",
            top: "-5px",
            right: "20px",
            width: "60px",
            height: "18px",
            background: "#fde68a",
            opacity: 0.85,
            transform: "rotate(7deg)",
          }}
        />

        <h2 style={{ marginBottom: "10px" }}>About Me</h2>

        <p style={{ lineHeight: "1.6", fontSize: "14px" }}>
          I like building playful interfaces, solving problems, and making
          things feel alive. I enjoy mixing logic with design to create
          experiences that feel personal ✨
        </p>
      </div>

      {/* 📸 FLIP CARD */}
      <div
        onClick={() => setFlipped(!flipped)}
        style={{
          width: "180px",
          height: "220px",
          perspective: "1000px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.8s",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              background: "#fff",
              border: "6px solid #ffffff",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              transform: "rotate(2deg)",
              overflow: "hidden",
              animation: "floatPhoto 3s ease-in-out infinite",
            }}
          >
            <img
              src="/main.jpeg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* BACK */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "#ede9fe",
              border: "6px solid #ffffff",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
              textAlign: "center",
              fontFamily: '"Bradley Hand ITC","Segoe Print"',
              color: "#3b0764",
              fontSize: "14px",
            }}
          >
            I’m someone who loves building aesthetic + interactive UIs and
            turning simple ideas into playful experiences ✨
          </div>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes wobble {
          0%,100% { transform: rotate(-2deg) translateY(0px); }
          50% { transform: rotate(-2deg) translateY(-6px); }
        }

        @keyframes floatPhoto {
          0%,100% { transform: rotate(2deg) translateY(0px); }
          50% { transform: rotate(2deg) translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
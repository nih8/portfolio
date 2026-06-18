"use client";

import { createPortal } from "react-dom";

type Props = {
  close: () => void;
};

export default function ContactPostcard({ close }: Props) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={close}
        style={{
          position: "absolute",
          top: "30px",
          right: "40px",
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          border: "none",
          background: "#fffdf8",
          color: "#581c87",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        ✕
      </button>

      <div
        style={{
          width: "550px",
          height: "250px",
          background: "#fffdf8",
          borderRadius: "10px",
          boxShadow: "0 30px 100px rgba(0,0,0,0.5)",
          transform: "rotate(-2deg)",
          display: "flex",
          padding: "35px",
          position: "relative",
          fontFamily: "georgia",
          color: "#581c87",
          animation: "pop 0.3s ease",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            width: "60%",
            paddingRight: "30px",
            borderRight: "2px dashed #d8b4fe",
          }}
        >
          <h1>Hey! Lets Talk</h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            Let's connect :)
          </p>

          <p>b24cs1045@gmail.com</p>
          <p><a href="https://github.com/nih8" style={{textDecoration:"none"}}>GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/niharika-more-315112328/" style={{textDecoration:"none"}}>Linkedin</a></p>
          <p><a href="https://drive.google.com/file/d/1qArwyNpWr4i-raA1zQmZ-fnm3eYGlz8f/view?usp=drive_link" style={{textDecoration:"none"}}>Resume</a></p>
          
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "140px",
              height: "140px",
              border: "5px dashed #c084fc",
              overflow: "hidden",
            }}
          >
            <img
              src="/main pfp.jpeg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            Niharika More
            <br />
            Developer ✨
          </p>
        </div>
      </div>

      {/* animation */}
      <style>{`
        @keyframes pop {
          from {
            transform: scale(0.8) rotate(-8deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(-2deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>,
    document.body
  );
}
"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function SurpriseBubble() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* 📷 CAMERA BUTTON */}
      {/* 📷 CAMERA BUTTON */}
<div
  onClick={() => setOpen(true)}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  style={{
    position: "absolute",
    top: "0px",
    left: "232px",

    cursor: "pointer",

    fontSize: "110px",

    transform: hover
      ? "translateY(-8px) rotate(8deg) scale(1.15)"
      : "rotate(-20deg)",

    filter: hover
      ? "drop-shadow(0 15px 15px rgba(0,0,0,0.25))"
      : "drop-shadow(0 8px 10px rgba(0,0,0,0.18))",

    transition: "all 0.25s ease",

    userSelect: "none",
  }}
>
  📷
</div>


      {/* MODAL */}
      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            style={{
              position:"fixed",
              inset:0,
              background:"rgba(0,0,0,0.6)",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              zIndex:99999,
            }}
          >

            <div
              onClick={(e)=>e.stopPropagation()}
              style={{
                background:"#fff",
                padding:"18px",
                borderRadius:"16px",
                textAlign:"center",
                boxShadow:"0 20px 60px rgba(0,0,0,0.4)",
                maxWidth:"300px",
              }}
            >

              <img
                src="/wall4.jpeg"
                alt="cute me"
                style={{
                  width:"100%",
                  borderRadius:"12px",
                }}
              />

              <p
                style={{
                  marginTop:"10px",
                  fontFamily:"Bradley Hand ITC",
                  fontWeight:900,
                  fontSize:"18px",
                  color:"#444",
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
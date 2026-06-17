"use client";

import { useState } from "react";
import ContactPostcard from "@/components/ContactPostcard";

type PhoneProps = {
  top: string;
  left: string;
  rotate: string;
};

export default function ContactPhone({ top, left, rotate }: PhoneProps) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* 📞 WALL PHONE OBJECT */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
        style={{
          position: "absolute",

          width: "95px",
          height: "95px",

          top,
          left,

          "--rot": rotate,

          cursor: "pointer",

          transform: hover
            ? `rotate(${rotate}) translateY(-10px) scale(1.05)`
            : `rotate(${rotate}) translateY(0px) scale(1)`,

          animation: !hover
            ? "phoneVibrate 1.6s infinite ease-in-out"
            : "none",

          transition: "transform 0.25s ease",
        } as React.CSSProperties}
      >
        {/* waves */}
        <div
          style={{
            position: "absolute",
            left: "-25px",
            top: "35px",
            fontSize: "18px",
            color: "#581c87",
            opacity: hover ? 1 : 0.5,
            transition: "0.2s ease",
          }}
        >
          (((
        </div>

        <div
          style={{
            position: "absolute",
            right: "-25px",
            top: "35px",
            fontSize: "18px",
            color: "#581c87",
            opacity: hover ? 1 : 0.5,
            transition: "0.2s ease",
          }}
        >
          )))
        </div>

        {/* 📞 PHONE BODY */}
        <div
          style={{
            width: "95px",
            height: "95px",
            background: "linear-gradient(145deg, #1f1f1f, #0b0b0b)",
            borderRadius: "18px",
            position: "relative",

            boxShadow: hover
              ? "0 25px 50px rgba(0,0,0,0.4)"
              : "0 15px 30px rgba(0,0,0,0.3)",
          }}
        >
          {/* speaker */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "30px",
              height: "4px",
              background: "#444",
              borderRadius: "2px",
            }}
          />

          {/* screen */}
          <div
            style={{
              position: "absolute",
              top: "25px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "50px",
              height: "32px",
              background: hover
                ? "rgba(147, 51, 234, 0.25)"
                : "rgba(255,255,255,0.05)",
              borderRadius: "6px",
              transition: "0.25s ease",
            }}
          />

          {/* keypad */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 6px)",
              gap: "4px",
            }}
          >
            {Array(9).fill(0).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "5px",
                  height: "5px",
                  background: "#666",
                  borderRadius: "50%",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 📩 POPUP */}
      {open && <ContactPostcard close={() => setOpen(false)} />}
    </>
  );
}
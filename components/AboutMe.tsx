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
          fontFamily: '"Bradley Hand ITC","Caveat"',
          color: "#3b0764",
          border:"1px solid #7c3aed"
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
            background: "#3100d4",
            opacity: 0.4,
            transform: "rotate(-8deg)",
          }}
        />

        {/* tape right */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "-40px",
            width: "200px",
            height: "30px",
            background: "#3100d4",
            opacity: 0.4,
            transform: "rotate(15deg)",
          }}
        />

        <h2 style={{ marginBottom: "10px",fontFamily:'"courier new","Space Mono"' }}>About Me</h2>

        <p style={{ lineHeight: "1.6", fontSize: "14px" ,fontWeight:900}}>
         I’m a Computer Science undergraduate at Indian Institute of Technology Jodhpur (Class of 2028) with a CGPA of 8.24, currently exploring the endless possibilities of technology and creativity.

I’m from Thane, Maharashtra, and I enjoy building things that are not just functional, but also feel meaningful and memorable. Right now, I’m experimenting, learning, and creating projects that I hope someone might find useful someday.

This portfolio took a lot of time, patience, and tiny details (probably more than I’d like to admit), but I wanted it to feel like a little piece of me rather than just another webpage. 🌸

Still learning. Still building. Still figuring out what I can create next :)

        </p>
        <p style={{ lineHeight: "1.6", fontSize: "14px" ,fontWeight:900}}>PS: The picture on the side is clickable </p>
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
            border:"1px solid #b89fe3",
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
              src="/inter iit.jpeg"
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
              fontFamily: '"Bradley Hand ITC","Caveat"',
              fontWeight:900,
              color: "#3b0764",
              fontSize: "14px",
            }}
          >
            Story behind this picture: After my team and I finished presenting our GDAI PS solution at inter IIT tech meet 14.0, some random photographers asked us to do this one by one. We didnt think much about it and did it for fun. This photo is taken from the instagram post by official IIT Patna Inter IIT tech account T-T
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
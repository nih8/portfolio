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
          position:"absolute",
          top:"30px",
          right:"40px",

          width:"45px",
          height:"45px",

          borderRadius:"50%",
          border:"1px solid rgba(90,50,20,0.3)",

          background:"#e8c9a0",
          color:"#4b2e1f",

          fontSize:"22px",
          cursor:"pointer",
        }}
      >
        ✕
      </button>



      {/* POSTCARD */}
      <div
        style={{
          width:"500px",
          height:"280px",

          background:`
            linear-gradient(
              135deg,
              #d8b48a,
              #c89b6d
            )
          `,

          borderRadius:"10px",

          border:"1px solid rgba(90,50,20,0.3)",

          boxShadow:"0 30px 100px rgba(60,30,10,0.45)",

          transform:"rotate(0deg)",

          display:"flex",

          padding:"35px",

          position:"relative",

          fontFamily:'"Old English Text MT","UnifrakturCook"',

          color:"#4b2e1f",

          overflow:"hidden",

          animation:"pop 0.3s ease",
        }}
      >


        {/* PAPER TEXTURE */}
        <div
          style={{
            position:"absolute",
            inset:0,

            background:`
              repeating-linear-gradient(
                0deg,
                rgba(52, 29, 11, 0.04) 0px,
                rgba(46, 26, 10, 0.04) 1px,
                transparent 1px,
                transparent 4px
              ),

              repeating-linear-gradient(
                90deg,
                rgba(255,255,255,0.08) 0px,
                rgba(255,255,255,0.08) 1px,
                transparent 1px,
                transparent 5px
              )
            `,

            pointerEvents:"none",
          }}
        />



        {/* INNER BORDER */}
        <div
          style={{
            position:"absolute",

            inset:"12px",

            border:"5px solid rgba(49, 22, 1, 0.18)",

            borderRadius:"6px",

            pointerEvents:"none",
          }}
        />



        {/* OLD PAPER STAIN */}
        <div
          style={{
            position:"absolute",

            width:"180px",
            height:"180px",

            right:"-50px",
            top:"-40px",

            background:
              "radial-gradient(circle, rgba(90,50,20,0.13), transparent 70%)",

            pointerEvents:"none",
          }}
        />



        {/* LEFT SIDE */}
        <div
          style={{
            width:"60%",

            paddingRight:"30px",

            borderRight:
              "2px dashed rgba(90,50,20,0.35)",

            zIndex:1,

            background:`
              repeating-linear-gradient(
                to bottom,
                transparent 0px,
                transparent 31px,
                rgba(90,50,20,0.10) 32px
              )
            `,
          }}
        >

          <p style={{fontSize:"40px"}}>
            Hey! Lets Talk
          </p>



          <p style={{fontSize:"25px"}}><u>
            b24cs1045@iitj.ac.in
            <br/>
            +91 8291565520
            <br/>
            <a
              href="https://github.com/nih8"
              style={{
                textDecoration:"none",
                color:"#4b2e1f",
                
                fontSize:"25px"
              }}
            ><u>
              GitHub</u>
            </a>
            <br/>
            <a
              href="https://www.linkedin.com/in/niharika-more-315112328/"
              style={{
                textDecoration:"none",
                color:"#4b2e1f",
                fontSize:"25px"
              }}
            ><u>
              Linkedin</u>
            </a>
            <br/>
            <a
              href="https://drive.google.com/file/d/1qArwyNpWr4i-raA1zQmZ-fnm3eYGlz8f/view?usp=drive_link"
              style={{
                textDecoration:"none",
                color:"#4b2e1f",
                fontSize:"25px"
              }}
            ><u>
              Resume</u>
            </a>


          </u></p>
          


        </div>




        {/* RIGHT SIDE */}
        <div
          style={{
            width:"40%",

            display:"flex",

            alignItems:"center",

            justifyContent:"center",

            flexDirection:"column",

            zIndex:1,
          }}
        >


          {/* stamp outline */}
          <div
            style={{
              width:"140px",
              height:"140px",

              border:"5px dashed #773200",

              background:"#d6b48c",

              overflow:"hidden",

              transform:"rotate(0deg)",

              boxShadow:
                "0 8px 15px rgba(70,40,15,0.25)",
            }}
          >

            <img
              src="/stamp.jpeg"
              style={{
                width:"100%",
                height:"100%",
                objectFit:"cover",
              }}
            />

          </div>



          <p
            style={{
              marginTop:"20px",

              textAlign:"center",
            }}
          >
            Niharika More
            <br />
            
          </p>


        </div>



        {/* fake stamp area markings */}
        <div
          style={{
            position:"absolute",

            right:"35px",

            top:"35px",

            width:"100px",

            height:"70px",

            border:
              "1px dashed rgba(90,50,20,0.25)",

            opacity:0.5,
          }}
        />


      </div>



      <style>{`

        @keyframes pop {

          from {
            transform:scale(0.8) rotate(-8deg);
            opacity:0;
          }

          to {
            transform:scale(1) rotate(-2deg);
            opacity:1;
          }

        }

      `}</style>


    </div>,

    document.body
  );
}
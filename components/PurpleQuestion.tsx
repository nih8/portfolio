"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function PurpleQuestion() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* PALETTE BUTTON */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
        style={{
          position:"absolute",

          top:"260px",
          left:"0px",

          cursor:"pointer",

          zIndex:20,

          fontSize:"150px",

          animation:"questionFloat 3s ease-in-out infinite",

          transform:hover
            ? "rotate(8deg) scale(1.1)"
            : "rotate(0deg) scale(1)",

          transition:"0.3s ease",

          filter:
            "drop-shadow(0 15px 30px rgba(124,58,237,0.3))",
        }}
      >

        🎨


        {
          hover &&
          <div
            style={{
              position:"absolute",

              top:"120px",

              left:"-20px",

              width:"170px",

              background:"#fffdf8",

              padding:"15px",

              borderRadius:"10px",

              boxShadow:
              "0 20px 50px rgba(0,0,0,0.25)",

              color:"#581c87",

              fontFamily:'"Bradley Hand ITC","Caveat"',

              fontWeight:900,

              fontSize:"18px",

              textAlign:"center",

              animation:"noteDrop 0.4s ease",

              transform:"rotate(-4deg)",
            }}
          >
            why is this page
            so purple? 💜
          </div>
        }

      </div>



      {/* POPUP USING PORTAL */}
      {
        open &&
        createPortal(

          <div
            onClick={()=>setOpen(false)}

            style={{
              position:"fixed",

              inset:0,

              width:"100vw",

              height:"100vh",

              background:"rgba(0,0,0,0.55)",

              backdropFilter:"blur(6px)",

              zIndex:99999,

              display:"flex",

              justifyContent:"center",

              alignItems:"center",
            }}
          >


            <div
              onClick={(e)=>e.stopPropagation()}

              style={{
                position:"relative",

                width:"420px",

                background:"#fffdf8",

                padding:"40px",

                borderRadius:"12px",

                color:"#581c87",

                fontFamily:'"Bradley Hand ITC","Caveat"',

                fontSize:"20px",

                lineHeight:"1.6",

                textAlign:"center",

                boxShadow:
                "0 40px 100px rgba(0,0,0,0.35)",

                transform:"rotate(-3deg)",

                animation:"popup 0.4s ease",

                border:
                "2px solid rgba(124,58,237,0.25)",
              }}
            >


              {/* tapes */}

              <div
                style={{
                  position:"absolute",

                  top:"-10px",

                  left:"30px",

                  width:"70px",

                  height:"18px",

                  background:"#e9d5ff",

                  opacity:0.7,

                  transform:"rotate(-8deg)",
                }}
              />


              <div
                style={{
                  position:"absolute",

                  top:"-10px",

                  right:"30px",

                  width:"70px",

                  height:"18px",

                  background:"#e9d5ff",

                  opacity:0.7,

                  transform:"rotate(8deg)",
                }}
              />



              <h2>
                Why is this page so purple? 💜
              </h2>



              <p style={{fontWeight:900}}>

                A person really special to me once said that i remind him of the color
                purple.

                <br/>

                Since I wanted to make this page look personal, rather than something robotic,
                I chose purple to be a major color throughout this portfolio.

              </p>



            </div>


          </div>,

          document.body
        )
      }



      <style>{`

        @keyframes questionFloat {

          0%,100%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-12px);
          }

        }


        @keyframes noteDrop {

          from{
            opacity:0;

            transform:
            translateY(-20px)
            rotate(-4deg);
          }

          to{
            opacity:1;

            transform:
            translateY(0)
            rotate(-4deg);
          }

        }


        @keyframes popup {

          from{

            opacity:0;

            transform:
            translateY(-40px)
            scale(0.8)
            rotate(-8deg);

          }


          to{

            opacity:1;

            transform:
            translateY(0)
            scale(1)
            rotate(-3deg);

          }

        }


      `}</style>


    </>
  );
}
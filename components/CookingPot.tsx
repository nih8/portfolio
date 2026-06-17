"use client";

import { useState } from "react";

export default function CookingPot() {

  const [hover, setHover] = useState(false);


  return (

    <div

      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}

      style={{
        position:"fixed",

        right:"35px",
        bottom:"80px",

        zIndex:50,

        cursor:"pointer",

        animation:"float 3s ease-in-out infinite",
      }}

    >


      {/* steam */}

      <div
        style={{
          position:"absolute",

          top:"-45px",
          left:"35px",

          fontSize:"28px",

          animation:"steam 2.5s infinite",

        }}
      >
        ☁️
      </div>


      <div
        style={{
          position:"absolute",

          top:"-55px",
          left:"70px",

          fontSize:"20px",

          animation:"steam 2.5s infinite",
          animationDelay:"1s",

        }}
      >
        ☁️
      </div>



      {/* expanded note */}

      {
        hover &&
        <div

          style={{
            position:"absolute",

            bottom:"80px",

            right:"0",

            width:"190px",

            background:"#fffdf8",

            padding:"15px",

            borderRadius:"8px",

            boxShadow:
            "0 15px 35px rgba(0,0,0,0.2)",

            fontFamily:"georgia",

            color:"#581c87",

            textAlign:"center",

          }}

        >

          <h3
          style={{
            margin:"5px 0",
          }}
          >
            Currently Cooking
          </h3>


          <p
          style={{
            margin:"5px",
            fontSize:"14px",
            fontFamily:"Bradley Hand ITC",
            fontWeight:900
          }}
          >
           Where did my money go?
          </p>


         


        </div>
      }



      {/* pot */}

      <div

      style={{

        width:"80px",
        height:"55px",

        background:"#c084fc",

        borderRadius:
        "0 0 25px 25px",

        boxShadow:
        "0 10px 25px rgba(88,28,135,0.3)",

        position:"relative",

      }}

      >


        {/* rim */}

        <div

        style={{

          position:"absolute",

          top:"-8px",

          left:"-5px",

          width:"90px",

          height:"15px",

          borderRadius:"50%",

          background:"#a855f7",

        }}

        />


        {/* handle */}

        <div

        style={{

          position:"absolute",

          right:"-18px",

          top:"15px",

          width:"25px",

          height:"25px",

          border:
          "5px solid #a855f7",

          borderLeft:"none",

          borderRadius:"50%",

        }}

        />

      </div>



      <style>

      {`

      @keyframes float {

        0%,100% {
          transform:translateY(0);
        }

        50% {
          transform:translateY(-12px);
        }

      }



      @keyframes steam {

        0% {

          transform:
          translateY(0);

          opacity:0.3;

        }


        50% {

          transform:
          translateY(-15px);

          opacity:1;

        }


        100% {

          transform:
          translateY(-30px);

          opacity:0;

        }

      }

      `}

      </style>


    </div>

  );
}
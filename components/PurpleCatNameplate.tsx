"use client";

export default function PurpleCatNameplate() {
  return (
    <div
      style={{
        position: "absolute",
        top: "120px",
        left: "350px",

        width: "260px",
        height: "300px",

        zIndex: 5,

        transform: "rotate(-4deg)",

        animation: "floatCat 4s ease-in-out infinite",
      }}
    >


      {/* CAT HEAD */}

      <div
        style={{
          position:"absolute",

          top:"0px",
          left:"55px",

          width:"150px",
          height:"125px",

          background:"#7c3aed",

          borderRadius:
          "50% 50% 45% 45%",

          boxShadow:
          "0 20px 40px rgba(88,28,135,0.25)",

          zIndex:3,
        }}
      >


        {/* LEFT EAR */}

        <div
          style={{
            position:"absolute",

            top:"-35px",
            left:"5px",

            width:"60px",
            height:"60px",

            background:"#7c3aed",

            clipPath:
            "polygon(0 100%,50% 0,100% 100%)",

            transform:"rotate(-10deg)",
          }}
        />



        {/* RIGHT EAR */}

        <div
          style={{
            position:"absolute",

            top:"-35px",
            right:"5px",

            width:"60px",
            height:"60px",

            background:"#7c3aed",

            clipPath:
            "polygon(0 100%,50% 0,100% 100%)",

            transform:"rotate(10deg)",
          }}
        />



        {/* EYES */}

        <div
          style={{
            position:"absolute",

            top:"45px",
            left:"38px",

            width:"14px",
            height:"14px",

            background:"#3b0764",

            borderRadius:"50%",
          }}
        />


        <div
          style={{
            position:"absolute",

            top:"45px",
            right:"38px",

            width:"14px",
            height:"14px",

            background:"#3b0764",

            borderRadius:"50%",
          }}
        />



        {/* NOSE */}

        <div
          style={{
            position:"absolute",

            top:"72px",
            left:"66px",

            width:"0px",
            height:"0px",

            borderLeft:"9px solid transparent",
            borderRight:"9px solid transparent",

            borderTop:
            "12px solid #581c87",
          }}
        />


      </div>





      {/* PAPER */}

      <div
        style={{
          position:"absolute",

          top:"85px",
          left:"10px",

          width:"240px",
          height:"120px",

          background:"#88a2e8",

          color:"#581c87",
        
          padding:"25px 10px 10px",

          textAlign:"center",

          fontFamily:
          '"Broadway","Segoe Print"',

          fontWeight:900,

          fontSize:"40px",

          boxShadow:
          "0 25px 50px rgba(0,0,0,0.25)",


          clipPath:
          "polygon(0 8%,8% 0,16% 8%,25% 0,35% 8%,45% 0,55% 8%,65% 0,75% 8%,85% 0,100% 8%,100% 92%,90% 100%,80% 92%,70% 100%,60% 92%,50% 100%,40% 92%,30% 100%,20% 92%,10% 100%,0 92%)",

          zIndex:1000,
        }}
      >

        Niharika 
        <br />
        More

        

      </div>




      {/* PAWS ON PAPER EDGE */}

      <div
        style={{
          position:"absolute",

          top:"80px",
          left:"25px",

          width:"45px",
          height:"25px",

          background:"#7c3aed",

          borderRadius:"20px",

          transform:"rotate(15deg)",

          zIndex:4000,
        }}
      />



      <div
        style={{
          position:"absolute",

          top:"80px",
          right:"30px",

          width:"45px",
          height:"25px",

          background:"#7c3aed",

          borderRadius:"20px",

          transform:"rotate(-15deg)",

          zIndex:4000,
        }}
      />





      <style>{`

      @keyframes floatCat {

        0%,100%{
          transform:translateY(0px) rotate(-4deg);
        }

        50%{
          transform:translateY(-8px) rotate(-4deg);
        }

      }

      `}</style>


    </div>
  );
}
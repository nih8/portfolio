"use client";

import { createPortal } from "react-dom";

type Props = {
  close: () => void;
};


function HobbyPhoto({
  image,
  text,
  top,
  left,
  rotate,
}: {
  image:string;
  text:string;
  top:string;
  left:string;
  rotate:string;
}) {

  return (
    <div
      style={{
        position:"absolute",

        top,
        left,

        width:"110px",

        background:"#fffdf8",

        padding:"10px",

        boxShadow:"0 15px 35px rgba(0,0,0,0.25)",

        transform:`rotate(${rotate})`,

        zIndex:5,
      }}
    >


      {/* tape */}
      <div
        style={{
          position:"absolute",

          top:"-12px",

          left:"50%",

          transform:"translateX(-50%) rotate(-5deg)",

          width:"55px",

          height:"15px",

          background:"#fde68a",

          opacity:0.85,
        }}
      />


      <img
        src={image}
        style={{
          width:"100%",

          height:"80px",

          objectFit:"cover",
        }}
      />


      <p
        style={{
          margin:"8px 0 0",

          textAlign:"center",

          fontFamily:"Bradley Hand ITC",

          color:"#581c87",

          fontSize:"12px",

          fontWeight:700,
        }}
      >
        {text}
      </p>


    </div>
  );
}




export default function HobbyWall({ close }: Props) {


return createPortal(

<div
  onClick={close}

  style={{
    position:"fixed",

    inset:0,

    background:"rgba(0,0,0,0.75)",

    backdropFilter:"blur(8px)",

    zIndex:1000,

    display:"flex",

    alignItems:"center",

    justifyContent:"center",
  }}
>



{/* close button */}

<button
onClick={close}

style={{
  position:"absolute",

  top:"30px",

  right:"40px",

  width:"45px",

  height:"45px",

  borderRadius:"50%",

  border:"none",

  background:"#fffdf8",

  color:"#581c87",

  cursor:"pointer",

  fontSize:"20px",
}}
>
✕
</button>





{/* scrapbook board */}

<div

onClick={(e)=>e.stopPropagation()}

style={{

  position:"relative",

  width:"400px",

  height:"300px",


  background:`
    linear-gradient(
      135deg,
      #fffdf8,
      #f7eddc
    )
  `,


  boxShadow:
  "0 30px 100px rgba(0,0,0,0.5)",


  transform:"rotate(-2deg)",


  padding:"30px",


  overflow:"hidden",


  borderRadius:"10%",


  border:
  "1px solid rgba(120,80,40,0.15)",
}}

>



{/* paper texture */}

<div
style={{

position:"absolute",

inset:0,


background:`

repeating-linear-gradient(
0deg,
rgba(120,80,40,0.04) 0px,
rgba(120,80,40,0.04) 1px,
transparent 1px,
transparent 5px
),

repeating-linear-gradient(
90deg,
rgba(255,255,255,0.08) 0px,
rgba(255,255,255,0.08) 1px,
transparent 1px,
transparent 6px
)

`,


pointerEvents:"none",

}}
/>



{/* paper clip */}

<div

style={{

position:"absolute",

bottom:"20px",

right:"20px",


width:"35px",

height:"60px",


border:"3px solid #a1a1aa",


borderRadius:"20px",


transform:"rotate(-20deg)",


opacity:0.6,

}}

>

</div>






{/* doodle */}

<div

style={{

position:"absolute",

bottom:"20px",

left:"25px",

fontSize:"28px",

transform:"rotate(-15deg)",

}}

>
✦
</div>
<div

style={{

position:"absolute",

bottom:"300px",

left:"425px",

fontSize:"28px",

transform:"rotate(-15deg)",

}}

>
✦
</div>
<div

style={{

position:"absolute",

bottom:"50px",

left:"245px",

fontSize:"28px",

transform:"rotate(-15deg)",

}}

>
✦
</div>
<div

style={{

position:"absolute",

bottom:"300px",

left:"35px",

fontSize:"28px",

transform:"rotate(-15deg)",

}}

>
✦
</div>

<div

style={{

position:"absolute",

bottom:"200px",

left:"375px",

fontSize:"28px",

transform:"rotate(-15deg)",

}}

>
✦
</div>
<div

style={{

position:"absolute",

bottom:"150px",

left:"220px",

fontSize:"28px",

transform:"rotate(-15deg)",

}}

>
✦
</div>
<div

style={{

position:"absolute",

bottom:"100px",

left:"35px",

fontSize:"28px",

transform:"rotate(-15deg)",

}}

>
✦
</div>








{/* PHOTOS - SAME POSITIONS */}

<HobbyPhoto
image="/wall3.jpeg"
text="dancing"
top="50px"
left="40px"
rotate="-10deg"
/>


<HobbyPhoto
image="/wall2.jpeg"
text="gaming (club intro pic)"
top="20px"
left="210px"
rotate="6deg"
/>


<HobbyPhoto
image="/image.png"
text="youtube :3"
top="200px"
left="80px"
rotate="4deg"
/>


<HobbyPhoto
image="/dance.jpeg"
text="little moments 🌸"
top="180px"
left="290px"
rotate="-7deg"
/>



</div>


</div>,

document.body

);

}
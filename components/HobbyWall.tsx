"use client";

type Props = {
  close: () => void;
};


function HobbyPhoto({
  image,
  text,
  top,
  left,
  rotate,
}:{
  image:string;
  text:string;
  top:string;
  left:string;
  rotate:string;
}){

  return (
    <div
      style={{
        position:"absolute",

        top,
        left,

        width:"50px",

        background:"#fffdf8",

        padding:"10px",

        boxShadow:
        "0 15px 35px rgba(0,0,0,0.25)",

        transform:`rotate(${rotate})`,
      }}
    >

      {/* tape */}
      <div
        style={{
          position:"absolute",

          top:"-12px",

          left:"50%",

          transform:
          "translateX(-50%) rotate(-5deg)",

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
          height:"50px",

          objectFit:"cover",
        }}
      />


      <p
        style={{
          margin:"8px 0 0",

          textAlign:"center",

          fontFamily:"inter",

          color:"#581c87",

          fontSize:"13px",
        }}
      >
        {text}
      </p>


    </div>
  )
}



export default function HobbyWall({
  close
}:Props){


return (

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




<div

onClick={(e)=>e.stopPropagation()}

style={{
  position:"relative",

  width:"550px",

  height:"350px",

  background:"#fffdf8",

  boxShadow:
  "0 30px 100px rgba(0,0,0,0.5)",

  transform:"rotate(-2deg)",

  padding:"30px",

  overflow:"hidden",
}}

>


<h1

style={{
  textAlign:"center",

  color:"#581c87",

  fontFamily:"inter",
}}

>
My little hobbies 🌸
</h1>



<HobbyPhoto

image="/image.png"

text="gaming 🎮"

top="100px"

left="80px"

rotate="-8deg"

/>


<HobbyPhoto

image="/image.png"

text="creating ✨"

top="120px"

left="260px"

rotate="7deg"

/>


<HobbyPhoto

image="/image.png"

text="exploring 🌎"

top="250px"

left="120px"

rotate="5deg"

/>


<HobbyPhoto

image="/image.png"

text="little moments 🌸"

top="180px"

left="450px"

rotate="-6deg"

/>


</div>


</div>

)

}
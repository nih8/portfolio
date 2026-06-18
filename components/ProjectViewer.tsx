"use client";

export default function ProjectViewer({
  close,
  title,
}: {
  close: () => void;
  title: string;
}) {


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


{/* close button */}

<button

onClick={close}

style={{

position:"absolute",

top:"30px",

right:"40px",

width:"40px",

height:"40px",

borderRadius:"50%",

border:"none",

background:"#fffdf8",

color:"#581c87",

fontSize:"20px",

cursor:"pointer",

zIndex:2000,

boxShadow:
"0 5px 15px rgba(0,0,0,0.3)"

}}

>
✕
</button>





{/* papers container */}

<div

onClick={(e)=>e.stopPropagation()}

style={{

display:"flex",

alignItems:"center",

justifyContent:"center",

gap:"35px",

}}


>




{/* IMAGE PAPER */}

<div

style={{

width:"300px",

height:"340px",

background:"#fffdf8",

padding:"15px",

boxShadow:
"0 25px 60px rgba(0,0,0,0.35)",

transform:"rotate(-5deg)",

borderRadius:"8px",

position:"relative",

}}


>


{/* tape */}

<div

style={{

position:"absolute",

top:"-15px",

left:"50%",

transform:
"translateX(-50%) rotate(-5deg)",

width:"70px",

height:"20px",

background:"#fde68a",

opacity:0.8,

}}

 />



<div

style={{

width:"100%",

height:"100%",

background:"#ddd",

position:"relative",

overflow:"hidden",

}}

>

<a href="www.google.com">
<img

src="/placeholder-project.png"

style={{

width:"100%",

height:"100%",

objectFit:"cover",

}}

/></a>



{/* play button */}

<div

style={{

position:"absolute",

top:"50%",

left:"50%",

transform:
"translate(-50%,-50%)",

width:"65px",

height:"65px",

borderRadius:"50%",

background:"rgba(255,255,255,0.9)",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"28px",

color:"#18181b",

}}

><a href="www.google.com" style={{color:"black",textDecoration:"none"}}>

▶
</a>
</div>



</div>


</div>







{/* DETAILS PAPER */}

<div

style={{

width:"350px",

minHeight:"320px",

background:"#fefce8",

padding:"30px",

boxShadow:
"0 25px 60px rgba(0,0,0,0.3)",

transform:"rotate(4deg)",

borderRadius:"5px",

fontFamily:"serif",

color:"#27272a",

position:"relative",

}}

>


{/* paper clip */}

<div

style={{

position:"absolute",

top:"-15px",

right:"25px",

width:"35px",

height:"55px",

border:
"3px solid #71717a",

borderRadius:"20px",

transform:"rotate(15deg)"

}}

 />



<p

style={{

fontSize:"12px",

color:"#71717a"

}}

>

PROJECT FILE

</p>



<h1

style={{

color:"#581c87",

marginTop:"10px"

}}

>

{title}

</h1>



<p

style={{

lineHeight:"1.6"

}}

>

Project description goes here.

<br/>

This is where you can explain what
the project does.

</p>



<h3>
Tech Stack
</h3>


<p>

React • C++ • AI

</p>



<div

style={{

marginTop:"30px",

display:"flex",

gap:"15px"

}}

>


<button>

Github

</button>


<button>

Demo

</button>


</div>



</div>






</div>




</div>


)

}
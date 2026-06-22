"use client";

import {createPortal} from "react-dom";


export default function ProjectViewer({

close,
title,
image,
github,
demo,
description,
tech

}:{

close:()=>void;
title:string;
image:string;
github:string;
demo:string;
description:string;
tech:string;

}){


return createPortal(

<div

onClick={close}

style={{

position:"fixed",

inset:0,

background:"rgba(0,0,0,0.75)",

backdropFilter:"blur(8px)",

zIndex:99999,

display:"flex",

alignItems:"center",

justifyContent:"center"

}}

>



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

fontSize:"20px",

cursor:"pointer"

}}

>

✕

</button>





<div

onClick={(e)=>e.stopPropagation()}

style={{

display:"flex",

gap:"35px",

alignItems:"center"

}}

>





{/* IMAGE PAPER */}


<div

style={{

width:"300px",

height:"340px",

background:"#fffdf8",

padding:"15px",

boxShadow:"0 25px 60px rgba(0,0,0,0.35)",

transform:"rotate(-5deg)",

borderRadius:"8px",

}}

>


<div

style={{

width:"100%",

height:"100%",

position:"relative",

overflow:"hidden"

}}

>


<a

href={demo}

target="_blank"

>


<img

src={image}

style={{

width:"100%",

height:"100%",

objectFit:"cover"

}}

/>




<div

style={{

position:"absolute",

top:"50%",

left:"50%",

transform:"translate(-50%,-50%)",

width:"65px",

height:"65px",

borderRadius:"50%",

background:"rgba(255,255,255,0.9)",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"28px"

}}

>

▶

</div>


</a>


</div>


</div>








{/* DETAILS PAPER */}



<div

style={{

width:"350px",

minHeight:"320px",

background:"#fefce8",

padding:"30px",

boxShadow:"0 25px 60px rgba(0,0,0,0.3)",

transform:"rotate(4deg)",

borderRadius:"5px",

fontFamily:"serif"

}}

>


<p>

PROJECT FILE

</p>


<h1

style={{

color:"#581c87"

}}

>

{title}

</h1>



<p

style={{

lineHeight:"1.6"

}}

>

{description}

</p>



<h3>

Tech Stack

</h3>



<p>

{tech}

</p>




<div

style={{

marginTop:"30px"

}}

>


<a

href={github}

target="_blank"

>

<button>

Github

</button>

</a>



</div>


</div>





</div>


</div>,


document.body

)


}
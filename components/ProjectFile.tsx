"use client";

import { useState } from "react";
import ProjectViewer from "@/components/ProjectViewer";

export default function ProjectFile({
  number,
  title,
  rotate,
  image,
  github,
  demo,
  description,
  tech,
}: {
  number: string;
  title: string;
  rotate: string;
  image: string;
  github: string;
  demo: string;
  description: string;
  tech: string;
}) {

  const [open,setOpen] = useState(false);
  const [hover,setHover] = useState(false);


return (
<>
<div

onClick={()=>setOpen(true)}

onMouseEnter={()=>setHover(true)}

onMouseLeave={()=>setHover(false)}

style={{

border:"1px solid #b89fe3",

width:"260px",

height:"180px",

background:"#f8f5ee",

cursor:"pointer",

padding:"25px",

boxShadow:hover
?"0 25px 50px rgba(0,0,0,0.2)"
:"0 15px 35px rgba(0,0,0,0.15)",

transform:hover
?`rotate(${rotate}) translateY(-8px) scale(1.02)`
:`rotate(${rotate}) translateY(0px) scale(1)`,

transition:"all 0.25s ease",

position:"relative"

}}

>


<div

style={{

position:"absolute",

top:"-10px",

right:"20px",

width:"30px",

height:"50px",

border:"3px solid #71717a",

borderRadius:"20px",

transform:"rotate(20deg)"

}}

/>



<p

style={{

fontSize:"12px",

color:"#71717a",

fontWeight:900

}}

>

PROJECT FILE {number}

</p>



<h2

style={{

fontFamily:"serif",

color:"#27272a",

marginTop:"20px"

}}

>

{title}

</h2>




<p

style={{

fontSize:"14px",

color:"#52525b",

fontWeight:900

}}

>

Click to open file →

</p>


</div>



{
open &&

<ProjectViewer

close={()=>setOpen(false)}

title={title}

image={image}

github={github}

demo={demo}

description={description}

tech={tech}

/>

}


</>

)

}
"use client";

export default function ProjectFolder(){

const scrollToProjects = () => {
  document
  .getElementById("projects")
  ?.scrollIntoView({
    behavior:"smooth"
  });
}


return (

<div

onClick={scrollToProjects}

style={{

position:"absolute",

top:"40px",

right:"50px",

width:"240px",

height:"180px",

background:"#d6b98c",

borderRadius:"8px",

cursor:"pointer",

boxShadow:
"0 25px 50px rgba(0,0,0,0.25)",

transform:"rotate(4deg)",

transition:"0.3s",

}}

onMouseEnter={(e)=>
{
e.currentTarget.style.transform=
"rotate(4deg) translateY(-10px)";
}
}

onMouseLeave={(e)=>
{
e.currentTarget.style.transform=
"rotate(4deg)";
}
}

>


{/* folder tab */}

<div

style={{

position:"absolute",

top:"-25px",

left:"25px",

width:"90px",

height:"35px",

background:"#d6b98c",

borderRadius:
"10px 10px 0 0",

}}

/>



{/* label */}

<div

style={{

position:"absolute",

top:"55px",

left:"35px",

background:"#fffdf8",

padding:"15px",

width:"150px",

textAlign:"center",

fontFamily:"serif",

boxShadow:
"0 5px 15px rgba(0,0,0,0.15)"

}}

>

<h3
style={{
margin:0,
color:"#3f3f46"
}}
>
PROJECT ARCHIVE
</h3>


<p
style={{
fontSize:"12px",
marginTop:"10px"
}}
>
4 project files
</p>


</div>



{/* serious note */}

<div

style={{

position:"absolute",

bottom:"-35px",

right:"0",

background:"#fde68a",

padding:"8px 12px",

fontSize:"12px",

fontFamily:"Bradley Hand ITC",
fontWeight:900,

transform:"rotate(-6deg)",

boxShadow:
"0 5px 10px rgba(0,0,0,0.15)"

}}

>

serious stuff inside :p

</div>



</div>


)

}
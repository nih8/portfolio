import MemoryPhoto from "@/components/memoryphoto";
import ContactLetter from "@/components/ContactLetter";
 import Fact from "@/components/facts";
 import HobbyNote from "@/components/HobbyNote";
 import CookingPot from "@/components/CookingPot";
 import ProjectFolder from "@/components/ProjectFolder";
 import ProjectFile from "@/components/ProjectFile";
 import ResumeBriefcase from "@/components/ResumeBriefCase";
import IITNote from "@/components/IITNote";
import Bubble from "@/components/SurpriseBubble";
import Para from "@/components/Parallax";
export default function Home() {
  return (
    <main
    
      style={{
        minHeight: "2200px",
        position: "relative",
        overflow: "hidden",
        background:
          "#f5efff",
        padding: "20px",
      }}
    >
      
      <div
  style={{
    position:"absolute",
    inset:0,
    backgroundImage:"url('/cets.png')",
    backgroundRepeat:"repeat",
    backgroundSize:"280px",
    opacity:0.025,
    pointerEvents:"none",
  }}
/>



      <div
  style={{
    position: "absolute",
    top: "170px",
    left: "50%",
    transform: "translateX(-50%) rotate(-2deg)",
    background: "#fffdf8",
    width: "150px",
    padding: "15px",
    paddingBottom: "5px",
    boxShadow: "0 25px 60px rgba(124,58,237,0.25)",
    borderRadius: "5px",
    zIndex: 5,
  }}
>

  {/* tape */}
  <div
    style={{
      position:"absolute",
      top:"-18px",
      left:"50%",
      transform:"translateX(-50%) rotate(-4deg)",
      width:"80px",
      height:"22px",
      background:"#fde68a",
      opacity:0.8,
    }}
  />

  <img
    src="/main.jpeg"
    style={{
      width:"150px",
      height:"150px",
      objectFit:"cover",
    }}
  />

  

  <p
    style={{
      textAlign:"center",
      color:"#7c3aed",
     fontFamily: '"Bradley Hand ITC","Segoe Print"',
      fontSize:"14px",
      marginTop:"0px",
    }}
  >
    ME 
  </p>

</div>



<Fact
  fact="I love cats but I'm scared of them 😭"
  top="120px"
  left="80%"
  rotate="-8deg"
/>


<Fact
  fact="💣 BOOM. You thought this was a fact."
  top="400px"
  left="40%"
  rotate="7deg"
/>


<Fact
  fact="I can sleep literally anywhere."
  top="250px"
  left="25%"
  rotate="5deg"
/>


<Fact
  fact="I love building random projects ✨"
  top="400px"
  left="75%"
  rotate="-6deg"
/>


<Fact
  fact="Gaming is one of my favourite escapes 🎮"
  top="40px"
  left="45%"
  rotate="9deg"
/>


      
 
<section
  id="projects"
  style={{
    position:"relative",
    height:"1600px",
    marginTop:"900px",
  }}
>
<h1
style={{
textAlign:"center",
fontFamily: '"Bradley Hand ITC","Segoe Print"',
color:"#3f3f46"
}}
>
Project Archive
</h1>
<div
style={{
display:"grid",
gridTemplateColumns:"repeat(2,260px)",
justifyContent:"center",
gap:"60px",
marginTop:"70px"
}}
>


<ProjectFile
number="01"
title="CrackTheCode"
rotate="-3deg"
/>


<ProjectFile
number="02"
title="Project Two"
rotate="4deg"
/>


<ProjectFile
number="03"
title="Project Three"
rotate="-2deg"
/>


<ProjectFile
number="04"
title="Project Four"
rotate="3deg"
/>


</div>


</section>
<ContactLetter
  top="15%"
  left="10%"
  rotate="-4deg"
/>

<HobbyNote />
<CookingPot />
<ProjectFolder />
<ResumeBriefcase />
<IITNote />
<Bubble/>


    </main>
  );
}
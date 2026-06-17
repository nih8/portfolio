
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
    opacity:0.08,
    pointerEvents:"none",
  }}
/>



      <MemoryPhoto
      image="/main.jpeg"
      text="This is me :)"
      top="180px"
      left="40%"
      rotate="-5deg"
      target="about-me"
      />





<Fact
  fact="💣 BOOM. lol"
  top="400px"
  left="40%"
  rotate="15deg"
  color = "#0fbedd"
/>


<Fact
  fact="i love Zendaya"
  top="250px"
  left="25%"
  rotate="5deg"
  color = "#80c56e"
/>


<Fact
  fact="im always eepy"
  top="400px"
  left="75%"
  rotate="-6deg"
  color = "#c77acb"
/>


<Fact
  fact="i like cats but im scared to approach 'em"
  top="40px"
  left="45%"
  rotate="9deg"
  color = "#efabab"
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
  left="15%"
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
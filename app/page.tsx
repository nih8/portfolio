import MemoryPhoto from "@/components/memoryphoto";
 import ProjectNote from "@/components/ProjectNote";
 import HobbySection from "@/components/HobbySection";
 import Fact from "@/components/facts";

export default function Home() {
  return (
    <main
    
      style={{
        minHeight: "2200px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f5edff 0%, #ede0ff 45%, #e9d5ff 100%)",
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
    width: "240px",
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
    src="/main pfp.jpeg"
    style={{
      width:"240px",
      height:"240px",
      objectFit:"cover",
    }}
  />

  <h2
    style={{
      marginTop:"15px",
      textAlign:"center",
      color:"#581c87",
      fontFamily:"cursive",
      fontSize:"25px",
    }}
  >
    Niharika More 
  </h2>

  <p
    style={{
      textAlign:"center",
      color:"#7c3aed",
      fontFamily:"cursive",
      fontSize:"14px",
      marginTop:"8px",
    }}
  >
    welcome 
  </p>

</div>
<div
 style={{
   position:"absolute",
   top:"80px",
   left:"50%",
   transform:"translateX(-50%) rotate(3deg)",
   background:"#fef3c7",
   padding:"12px 18px",
   borderRadius:"10px",
   fontFamily:"cursive",
   color:"#581c87",
   boxShadow:"0 10px 25px rgba(0,0,0,0.12)",
   zIndex:10,
 }}
>
 ✿ Hover on these lil images ✿
</div>


      {/* surrounding memories */}

      <MemoryPhoto
  image="/wall3.jpeg" 
  text="dance mode 💃"
  top="140px"
  left="8%"
  rotate="-12deg"
  size="120px"
  target="hobbies"
/>


      <MemoryPhoto
  image="/who am i.jpeg"
  text="my IIT journey ✨"
  top="110px"
  left="68%"
  rotate="8deg"
  size="165px"
  target="projects"
/>


      <MemoryPhoto
  image="/wall2.jpeg"
  text="stage energy 🎤"
  top="540px"
  left="12%"
  rotate="7deg"
  size="140px"
  target="experience"
/>


      <MemoryPhoto
  image="/wall4.jpeg"
  text="just me 🌸"
  top="560px"
  left="70%"
  rotate="-8deg"
  size="125px"
  target="facts"
/>
 
<section
  id="projects"
  style={{
    position:"relative",
    height:"1600px",
    marginTop:"900px",
  }}
>

<div
  style={{
    position: "absolute",
    top: "300px",
    left: "50%",
    transform: "translateX(-50%) rotate(0deg)",
    background: "#fffdf8",
    width: "105px",
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
      transform:"translateX(-50%) rotate(0deg)",
      width:"80px",
      height:"22px",
      background:"#fde68a",
      opacity:0.8,
    }}
  />

  <img
    src="/image.png"
    style={{
      width:"100px",
      height:"100px",
      objectFit:"cover",
    }}
  />

  
  <p
    style={{
      textAlign:"center",
      color:"#7c3aed",
      fontFamily:"cursive",
      fontSize:"10px",
      marginTop:"8px",
    }}
  >
    My Projects yay (hover to see smth cool)
  </p>

</div>


<div
style={{
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap",
}}
>

<ProjectNote
  title="AI Logistics Information Assistant"
  image="/project1.jpeg"
  description="AI driven information assistant with retrieval pipeline."
  tech="Python • LangChain • FAISS"
  demoLink="YOUR_DRIVE_LINK"
  githubLink="YOUR_GITHUB_LINK"
  top="100px"
left="0%"
rotate="-5deg"
/>
<ProjectNote
  title="AI Logistics Information Assistant"
  image="/project1.jpeg"
  description="AI driven information assistant with retrieval pipeline."
  tech="Python • LangChain • FAISS"
  demoLink="YOUR_DRIVE_LINK"
  githubLink="YOUR_GITHUB_LINK"
  top="100px"
left="70%"
rotate="5deg"
/>
<ProjectNote
  title="AI Logistics Information Assistant"
  image="/project1.jpeg"
  description="AI driven information assistant with retrieval pipeline."
  tech="Python • LangChain • FAISS"
  demoLink="YOUR_DRIVE_LINK"
  githubLink="YOUR_GITHUB_LINK"
  top="500px"
left="0%"
rotate="5deg"
/>
<ProjectNote
  title="AI Logistics Information Assistant"
  image="/project1.jpeg"
  description="AI driven information assistant with retrieval pipeline."
  tech="Python • LangChain • FAISS"
  demoLink="YOUR_DRIVE_LINK"
  githubLink="YOUR_GITHUB_LINK"
  top="500px"
left="70%"
rotate="-5deg"
/>




</div>

</section>
<section
  id="hobbies"
  style={{
    position:"relative",
    height:"1600px",
    
  }}
>
  <HobbySection />
</section>
<section
  id="facts"
  style={{
    position:"relative",
    height:"1600px",
    
  }}
>
  <Fact />
</section>



    </main>
  );
}
"use client";

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
import About from "@/components/AboutMe";
import End from "@/components/EndSection";

import { useState, useEffect } from "react";


export default function Home() {

  const [scale, setScale] = useState(1);


  useEffect(() => {

    const updateScale = () => {
      setScale(window.innerWidth / 1000);
    };

    updateScale();

    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale);
    };

  }, []);



  return (

    <div
      style={{
        width: "1000px",
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >


      <main

        style={{
          position:"relative",
          background:"#f5efff",
          padding:"20px",
          minHeight:"fit-content",
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
          top="160px"
          left="420px"
          rotate="-5deg"
          target="about-me"
          size="140px"
        />



        <Fact
          fact="💣 BOOM. lol"
          top="400px"
          left="450px"
          rotate="-2deg"
          color="#0fbedd"
        />


        <Fact
          fact="i love Zendaya"
          top="200px"
          left="270px"
          rotate="5deg"
          color="#80c56e"
        />


        <Fact
          fact="im always eepy"
          top="400px"
          left="750px"
          rotate="-6deg"
          color="#c77acb"
        />


        <Fact
          fact="i like cats but im scared to approach 'em"
          top="40px"
          left="460px"
          rotate="9deg"
          color="#efabab"
        />



        <About />



        <section
          id="projects"
          style={{
            position:"relative",
            paddingBottom:"50px",
            marginTop:"1000px",
          }}
        >

          <h1
            style={{
              textAlign:"center",
              fontFamily:'"Bradley Hand ITC","Segoe Print"',
              color:"#3f3f46"
            }}
          >
            Project Archive
          </h1>



          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(2,350px)",
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
          top="380px"
          left="180px"
          rotate="-10deg"
        />

        <HobbyNote />

        <CookingPot />

        <ProjectFolder />

        <ResumeBriefcase />

        <IITNote />

        <Bubble />



        
          <End />
        



      </main>


    </div>

  );
}
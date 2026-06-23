"use client";

import MemoryPhoto from "@/components/memoryphoto";
import Fact from "@/components/facts";
import HobbyNote from "@/components/HobbyNote";
import CookingPot from "@/components/CookingPot";
import ProjectFile from "@/components/ProjectFile";
import ResumeBriefcase from "@/components/ResumeBriefCase";
import IITNote from "@/components/IITNote";
import Bubble from "@/components/SurpriseBubble";
import About from "@/components/AboutMe";
import End from "@/components/EndSection";
import Project from "@/components/ProjectFolder";
import Contact from "@/components/ContactLetter";
import PurpleQuestion from "@/components/PurpleQuestion";
import Cat from "@/components/PurpleCatNameplate";
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
        width:"1000px",

        transform:`scale(${scale})`,

        transformOrigin:"top left",

        /*
          removes extra space created by scale()
        */
        
      }}
    >


      <main

        style={{

          position:"relative",

          background:"#c9a9fc",

          padding:"20px",

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
          top="20px"
          left="780px"
          rotate="-5deg"
          target="about-me"
          size="140px"
        />



        


        <Fact
          fact="💣 BOOM. lol"
          top="800px"
          left="60px"
          rotate="5deg"
          color="#e1a1db"
        />


        <Fact
          fact="im always eepy"
          top="560px"
          left="850px"
          rotate="-6deg"
          color="#c77acb"
        />


        <Fact
          fact="i like cats but im scared to approach 'em"
          top="40px"
          left="580px"
          rotate="9deg"
          color="#c20505"
        />



        <About />



        <section
          id="projects"

          style={{

            position:"relative",

            marginTop:"1000px",

            paddingBottom:"50px",

          }}

        >

          <h1
            style={{
              textAlign:"center",

              fontFamily:'"Bradley Hand ITC","Caveat"',

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
              title="AI Logistics Information Assistant"
              rotate="-3deg"
              image="/project1.jpeg"
              demo="https://drive.google.com/file/d/1b4lFMiPHaG8ofvTMTfJHt0XRihZJbWA-/view?usp=sharing"

github="https://github.com/nih8/ai-logistics-assistant"

description="An assistant which provides information about my institute using the website data as a knowledge base"

tech="Python • Langchain • Beautifulsoup"
            />


            <ProjectFile
              number="02"
              title="Puzzle-chain"
              rotate="4deg"
              image="/project1.jpeg"
              demo="https://your-demo-link.com"

github="https://github.com/nih8/Puzzle-chain"

description="AI driven cryptography puzzle game with adaptive difficulty."

tech="C • Machine Learning • Algorithms"
            />


            <ProjectFile
              number="03"
              title="Mini-search-engine"
              rotate="-2deg"

              demo="https://drive.google.com/file/d/1Kb8oG--tdIBhoQTqzp_s0vYmelZmPxMq/view?usp=sharing"
               image="/project1.jpeg"

github="https://github.com/nih8/Mini-Search-Engine"

description="AI driven cryptography puzzle game with adaptive difficulty."

tech="C • Machine Learning • Algorithms"
            />


            <ProjectFile
              number="04"
              title="GDAI Inter-IIT Tech meet 14.0"
              rotate="3deg"
               image="/project1.jpeg"
              demo="https://your-demo-link.com"

github="https://www.google.com/search?q=private+repository&oq=provate+repo&gs_lcrp=EgZjaHJvbWUqCQgCEAAYDRiABDIGCAAQRRg5MgkIARAAGA0YgAQyCQgCEAAYDRiABDIJCAMQABgNGIAEMgkIBBAAGA0YgAQyCQgFEAAYDRiABDIJCAYQABgNGIAEMgkIBxAAGA0YgAQyCQgIEAAYDRiABDIJCAkQABgNGIAE0gEINDQ4MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"

description="AI driven cryptography puzzle game with adaptive difficulty."

tech="C • Machine Learning • Algorithms"
            />


          </div>

        </section>



        <Project/>
        <HobbyNote />

        <CookingPot />

        <ResumeBriefcase />

        <IITNote />

        <Bubble />
        <Contact
        top="380px"
        left="250px"
        rotate="-5deg"
        />
        

        {/* LAST THING ON PAGE */}
        <End />
        <PurpleQuestion/>
        <Cat />


      </main>


    </div>

  );

}
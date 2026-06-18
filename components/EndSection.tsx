"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function ConfettiPiece({
  delay,
  left,
}: {
  delay: number;
  left: number;
}) {
  return (
    <div
      style={{
        position: "absolute",

        top: "-20px",
        left: `${left}%`,

        width: "8px",
        height: "12px",

        background:
          ["#c084fc", "#f9a8d4", "#93c5fd", "#fde68a"][
            Math.floor(Math.random() * 4)
          ],

        opacity: 0.8,

        animation: `fall 3s linear ${delay}s infinite`,

        borderRadius: "2px",
      }}
    />
  );
}


export default function EndSection() {

  const formRef = useRef<HTMLFormElement>(null);

  const [sent,setSent] = useState(false);
  const [visible,setVisible] = useState(false);



  const sendMessage = (e:any)=>{

    e.preventDefault();


    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current!,
      "YOUR_PUBLIC_KEY"
    );


    setSent(true);

    formRef.current?.reset();

  };



  useEffect(()=>{

    const el =
    document.getElementById("end-section");


    const obs =
    new IntersectionObserver((entries)=>{

      if(entries[0].isIntersecting){
        setVisible(true);
      }

    });


    if(el){
      obs.observe(el);
    }


    return ()=>obs.disconnect();


  },[]);



return (

<section

id="end-section"

style={{

  position:"relative",

  marginTop:"100px",

  paddingBottom:"0px",

  textAlign:"center",

  fontFamily:'"Bradley Hand ITC","Segoe Print"',

}}

>



{/* CONFETTI */}

{
visible &&

<div

style={{

position:"absolute",

top:0,
left:0,
right:0,

height:"300px",

overflow:"hidden",

pointerEvents:"none",

}}

>


{
Array.from({length:40}).map((_,i)=>(

<ConfettiPiece

key={i}

delay={i*0.05}

left={Math.random()*100}

/>

))
}


</div>

}





{/* STAMP */}

{
visible &&

<div

style={{

position:"absolute",

top:"-40px",

left:"50%",

transform:"translateX(-50%) rotate(-10deg)",

padding:"10px 20px",

border:"3px dashed #7c3aed",

color:"#7c3aed",

fontWeight:900,

fontSize:"14px",

opacity:0.85,

animation:"stamp 0.6s ease-out",

}}

>
Yippie!

</div>

}





<h2

style={{

color:"#581c87",

fontSize:"28px"

}}

>

you’ve reached the end 💌

</h2>



<p

style={{

color:"#6b21a8",

marginBottom:"25px",
fontWeight:900

}}

>

leave a note before you go :)

</p>





<form

ref={formRef}

onSubmit={sendMessage}


style={{

display:"flex",

flexDirection:"column",

gap:"12px",

width:"260px",

margin:"0 auto",

background:"#ede9fe",

padding:"15px",

borderRadius:"12px",

boxShadow:"0 20px 50px rgba(0,0,0,0.15)",

transform:
sent
?
"rotateX(90deg) scale(0.8)"
:
"rotate(0deg)",

transition:"all 0.6s ease",

transformOrigin:"bottom",

}}

>


<input

name="user_name"

placeholder="your name"

style={{

padding:"10px",

border:"none",

borderRadius:"6px",

}}

/>



<textarea

name="message"

placeholder="your message..."

rows={4}

style={{

padding:"10px",

border:"none",

borderRadius:"6px",

resize:"none",

}}

/>



<button

type="submit"

style={{

padding:"10px",

border:"none",

borderRadius:"6px",

background:"#7c3aed",

color:"white",

cursor:"pointer",

}}

>

send ✉️

</button>


</form>




{
sent &&

<p

style={{

marginTop:"20px",

color:"#7c3aed"

}}

>

message received 💌

</p>

}




<style>{`

@keyframes fall {

0% {

transform:translateY(-20px) rotate(0deg);

opacity:1;

}


100% {

transform:translateY(300px) rotate(360deg);

opacity:0;

}

}


@keyframes stamp {

0% {

transform:
translateX(-50%)
scale(0.3)
rotate(-10deg);

opacity:0;

}


100% {

transform:
translateX(-50%)
scale(1)
rotate(-10deg);

opacity:1;

}

}

`}</style>


</section>

);

}
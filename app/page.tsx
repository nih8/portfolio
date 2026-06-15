export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Niharika More
      </h1>

      <p style={{ opacity: 0.7 }}>
        Developer | Builder | Problem Solver
      </p>

      <hr style={{ margin: "30px 0", opacity: 0.2 }} />
      
      <div style={{ display: "grid", gap: "15px" }}>
        <div style={{ padding: "15px", background: "#583a9e", borderRadius: "10px" }}>
          <b>But Who am I?</b>
          <p style={{ opacity: 0.7 }}>
            I am Niharika More, from Thane, Maharashtra. Currently a CSE student in IIT Jodhpur(24-28).
          </p>
        </div>

        
        <div style={{ padding: "15px", background: "#583a9e", borderRadius: "10px" }}>
          <b>What do i do?</b>
          <p style={{ opacity: 0.7 }}>
            I'm most comfortable with C++ and enjoy solving problems using it. Currently I am trying to make something that someone might actually use(hopefully). Apart from that my projects can be seen <a href = "/projects"><u>here</u></a>.
          </p>
        </div>

        
        <div style={{ padding: "15px", background: "#583a9e", borderRadius: "10px" }}>
          <b>Hobbies</b>
          <p style={{ opacity: 0.7 }}>
            I like working out. I also enjoy watching youtube. I like trying new food as well.
          </p>
        </div>
        
        <div style={{ padding: "15px", background: "#583a9e", borderRadius: "10px" }}>
          <b>Random facts 'bout me</b>
          
            <ul style={{ opacity: 0.7 }}>
              <li>I like cats but im scared to approach them first:(</li>
              <li>I love Zendaya :)</li>
              <li>People say im very tall but i dont feel that way though.</li>
              <li>I love sweet food but I also love spicy food :P</li>
              <li>I'm kinda very eepy</li>
            </ul>
          
        </div></div>
       
    </main>
  );
}
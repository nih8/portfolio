export default function Home() {
  const cardStyle = {
    padding: "20px",
    background: "#583a9e",
    borderRadius: "12px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    margin: "15px 0",
  };

  return (
    <main
      style={{
        maxWidth: "850px",
        margin: "auto",
        padding: "20px",
      }}
    >

      {/* Life collage */}
      <img
        src="/collage 3.jpeg"
        alt="My life collage"
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "35px",
        }}
      />


      {/* Profile section */}
      <div style={{ textAlign: "center" }}>

        <img
          src="/main pfp.jpeg"
          alt="Niharika More"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
          }}
        />


        <h1
          style={{
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          Niharika More
        </h1>


        <p style={{ opacity: 0.7 }}>
          Developer | Builder | Problem Solver
        </p>

      </div>


      <hr
        style={{
          margin: "35px 0",
          opacity: 0.2,
        }}
      />



      {/* Cards */}

      <div
        style={{
          display: "grid",
          gap: "25px",
        }}
      >


        <div style={cardStyle}>

          <h2>
            Me
          </h2>


          <img
            src="/who am i.jpeg"
            alt="About me"
            style={imageStyle}
          />


          <p style={{ opacity: 0.7 }}>
            I am Niharika More, from Thane, Maharashtra.
            Currently a CSE student in IIT Jodhpur(24-28).
          </p>


        </div>



        <div style={cardStyle}>

          <h2>
            What do i do?
          </h2>


          <img
            src="/what do i do .jpeg"
            alt="Things I build"
            style={imageStyle}
          />


          <p style={{ opacity: 0.7 }}>
            I'm most comfortable with C++ and enjoy solving
            problems using it. Currently I am trying to make
            something that someone might actually use(hopefully).
            Apart from that my projects can be seen{" "}
            <a href="/projects">
              <u>here</u>
            </a>.
          </p>


        </div>



        <div style={cardStyle}>

          <h2>
            Hobbies
          </h2>


          <img
            src="/hobbies.jpeg"
            alt="Hobbies"
            style={imageStyle}
          />


          <p style={{ opacity: 0.7 }}>
            I like working out and playing mobile games. 
            I also enjoy watching youtube.
            I like trying new food as well.
          </p>


        </div>



        <div style={cardStyle}>

          <h2>
            Random facts 'bout me
          </h2>
          <img
            src="/random.jpeg"
            alt="random"
            style={imageStyle}
          />


          <ul style={{ opacity: 0.7 }}>

            <li>
              I like cats but im scared to approach them first:(
            </li>

            <li>
              I love Zendaya :)
            </li>

            <li>
              People say im very tall but i dont feel that way though.
            </li>

            <li>
              I love sweet food but I also love spicy food :P
            </li>

            <li>
              I'm kinda very eepy
            </li>

          </ul>


        </div>


      </div>


    </main>
  );
}
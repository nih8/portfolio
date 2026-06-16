export const metadata = {
  title: "Niharika More | Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f6ecff, #eadcff, #ddd6fe)",
          color: "#3b0764",
          fontFamily: "sans-serif",
        }}
      >
        {/* background glow */}
        <div
          style={{
            position: "fixed",
            top: "-150px",
            left: "-150px",
            width: "420px",
            height: "420px",
            background: "#c084fc",
            filter: "blur(170px)",
            opacity: 0.35,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "fixed",
            bottom: "-180px",
            right: "-180px",
            width: "480px",
            height: "480px",
            background: "#a78bfa",
            filter: "blur(190px)",
            opacity: 0.3,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "28px 20px 60px",
          }}
        >
          {/* NAVBAR (no hover JS, pure CSS-safe) */}
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "26px",
              marginBottom: "45px",
              padding: "12px 18px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(168, 85, 247, 0.15)",
              boxShadow: "0 10px 30px rgba(124, 58, 237, 0.08)",
            }}
          >
            <a className="navLink" href="/">Home</a>
            <a className="navLink" href="/projects">Projects</a>
            <a className="navLink" href="/Niharika_More_sde_resume (2).pdf">Resume</a>

            <style>{`
              .navLink {
                color: #4c1d95;
                text-decoration: none;
                font-weight: 500;
                font-size: 14px;
                opacity: 0.8;
                padding: 6px 10px;
                border-radius: 10px;
                transition: all 0.2s ease;
              }

              .navLink:hover {
                opacity: 1;
                background: rgba(168, 85, 247, 0.12);
                transform: translateY(-1px);
              }
            `}</style>
          </nav>

          {children}
        </div>

        {/* texture */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: "url('/cets.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "280px",
            opacity: 0.03,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </body>
    </html>
  );
}
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

          /* 💜 KEEP YOUR VIBE */
          background:
            "#f5edff 0%",

          color: "#3b0764",
          fontFamily: '"Bradley Hand ITC","Segoe Print"',
          overflowX: "hidden",
        }}
      >
        {/* 💜 glowing frame (glass purple border) */}
        <div
          style={{
            position: "fixed",
            inset: "14px",

            borderRadius: "22px",

            border: "1px solid rgba(168, 85, 247, 0.25)",

            boxShadow:
              "0 0 40px rgba(168, 85, 247, 0.12), inset 0 0 80px rgba(168, 85, 247, 0.08)",

            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        
        

        {/* 🧱 main container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,

            maxWidth: "1000px",
            margin: "0 auto",

            
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
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
      <body style={{ margin: 0, background: "#331f60", color: "#dbdbdb" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px" }}>
          {/* NAVBAR */}
    <nav style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
      <a href="/" style={{ color: "#dbdbdb", textDecoration: "none" }}>Home</a>
      <a href="/projects" style={{ color: "#dbdbdb", textDecoration: "none" }}>Projects</a>
      
      <a href="/Niharika_More_sde_resume (2).pdf" style={{ color: "#dbdbdb", textDecoration: "none" }}>Resume</a>
    </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
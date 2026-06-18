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
          background: "#f5edff",
          color: "#3b0764",
          fontFamily: '"Bradley Hand ITC","Segoe Print"',
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
import {
  Caveat,
  Space_Mono,
  UnifrakturCook,
  Lora,
  Libre_Baskerville,
  Bungee,
  Inter,
} from "next/font/google";

export const metadata = {
  title: "Niharika More | Portfolio",
  description: "Developer Portfolio",
};

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const unifraktur = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

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
          fontFamily: '"Caveat","Bradley Hand ITC","Segoe Print",cursive',
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
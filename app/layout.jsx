import { Anton, Caveat_Brush, Space_Grotesk } from "next/font/google";
import "./styles/globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const script = Caveat_Brush({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "LORNIXE | Indie game dev studio",
  description: "A small team building hand-crafted games. Wishlist our first title and join the playtest.",
  icons: { icon: "/lornixe-crystal.ico" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

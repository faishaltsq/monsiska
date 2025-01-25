import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monsiskami",
  description: "Monsiskami Konsultan",
  icons: "/images/MONSISKAMI-removebg-preview.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} antialiased bg-white text-black font-sans`}
      >
        <Navbar />
        {children} {/* Ensure all child pages are rendered here */}
      </body>
    </html>
  );
}

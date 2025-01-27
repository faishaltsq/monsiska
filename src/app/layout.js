import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${robotoSlab.variable} antialiased bg-white text-black font-sans`}
      >
        <Navbar />
        {children} {/* Ensure all child pages are rendered here */}
        <Footer />
      </body>
    </html>
  );
}

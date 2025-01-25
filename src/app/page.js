'use client'

import React from "react";
import Home from "./home/index"; // Import the Home component

export default function myApp({ pageProps }) {
  return (
    <>
      <Home {...pageProps} /> {/* Render the Home component */}
    </>
  );
}
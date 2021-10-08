import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex bg-gray-200 min-h-screen-minus-nav">
        <div className="w-full sm:w-11/12 max-w-75rem mx-auto my-12">
          <Component {...pageProps} />
        </div>
      </div>
      <ToastContainer limit={1} />
      <Footer />
    </div>
  );
}
export default MyApp;

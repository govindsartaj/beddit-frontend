import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex bg-gray-200 min-h-screen-minus-nav">
        <div className="w-5/6 mx-auto my-12">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyApp;

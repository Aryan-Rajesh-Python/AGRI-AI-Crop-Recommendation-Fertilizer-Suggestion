import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import bgheader from "./assets/img/bgheader.jpg";
import First from "./sections/first";
import Cards from "./sections/cards";
import Model1 from "./sections/Model1";
import Model2 from "./sections/Model2";
import Model3 from "./sections/Model3";
import Disc from "./sections/Disc";
import { useEffect, useState } from "react";
function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldScrolling = scrollTop > 0;

      if (shouldScrolling !== scrolling) {
        setScrolling(shouldScrolling);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <>
      <div className="bg-emerald-100 flex flex-col">
        <div className="flex flex-row relative">
          <div className="relative">
            <div className="relative">
              <img
                src={bgheader}
                className="w-full h-full object-contain"
                alt="Background Header"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="absolute top-1/3 left-1/4 mt-10 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
              <div>AGRICULTURE</div>
              <div>& AI</div>
            </div>
            <div className=" absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold">
              <div>A Groundbreaking Initiative That Harnesses The Power</div>
              <div>
                {" "}
                Of Machine Learning To Revolutionize Agriculture Practices.
              </div>

              <button className="absolute top-1/10 left-1/8 mt-10 font-bold btn rounded-full text-green-800  ">
                {" "}
                VIEW SOURCE CODE{" "}
              </button>
            </div>
            <div
              className={`fixed bg-emerald-100 rounded-xl shadow-md box-border h-16 min-w-[90vw] top-6 left-14 transition-all ${
                scrolling
                  ? "opacity-60 transform -translate-y-10"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              <NavBar />
            </div>
          </div>
        </div>
        <div className="bg-emerald-100 mt-10  h-screen w-full">
          <First />
        </div>
        <div className="bg-emerald-100 h-screen min-w-[90vw] mt-10">
          <h1 className="text-green-600 font-extrabold font-mono text-2xl m-8">
            HOW DOES THE PROCESS WORK?
          </h1>
          <Model1 />
        </div>
        <div className="bg-emerald-100 h-screen w-full mt-16">
          <Model2 />
        </div>
        <div className="bg-emerald-100 h-screen w-full">
          <Model3 />
        </div>
        <div className="bg-emerald-900  flex justify-center items-center min-h-[60vh] min-w-[90vw] rounded-md">
          <Disc />
        </div>
        <div className="min-h-[50vh]">
          <hr />
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default App;

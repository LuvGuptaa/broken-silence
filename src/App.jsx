import React, { useState } from "react";
import image from "./assets/bg-image.jpeg";
import dvm from "./assets/DVM Logo.png";
import lockedIn from "./assets/locked-in.svg";
import DevelopersModal from "./DevelopersModal";
import ReactGA from "react-ga4";

ReactGA.initialize("G-KC4R0EYVH9");

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10"></div>
      <div className="relative z-20 flex flex-col justify-between min-h-screen">
        <nav className="flex justify-between items-center p-4 px-8">
          <div className=" scale-75 lg:scale-100">
            <img src={dvm} alt="DVM" height={60} width={60} />
            <a href="https://bits-dvm.org/" target="/blank">
              <div className="text-white cursor-pointer text-lg font-bold mt-1 flex justify-between">
                <span>D</span>
                <span>V</span>
                <span>M</span>
              </div>
            </a>
          </div>

          <button
            class="relative items-center justify-start inline-block px-5 py-3 lg:px-7 lg:py-4 overflow-hidden font-bold rounded-lg group"
            onClick={() => setShowModal(!showModal)}
          >
            <span class="w-40 h-40 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Developers
            </span>
            <span class="absolute inset-0 border-2 border-white rounded-lg"></span>
          </button>
        </nav>

        <div className="flex-grow flex flex-col gap-8 justify-center items-center p-4">
          <img src={lockedIn} height={150} width={450} alt="" />
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1ocrNznFWunxSHt-TBIlGA_hjY_ryxLg8"
              target="blank"
              class="relative items-center justify-start inline-block px-5 py-3 lg:px-7 lg:py-4 overflow-hidden font-bold rounded-lg group"
            >
              <span class="w-40 h-40 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Download
              </span>
              <span class="absolute inset-0 border-2 border-white rounded-lg"></span>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1ocrNznFWunxSHt-TBIlGA_hjY_ryxLg8"
              target="blank"
              class="relative items-center justify-start inline-block px-5 py-3 lg:px-7 lg:py-4 overflow-hidden font-bold rounded-lg group"
            >
              <span class="w-40 h-40 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Instructions
              </span>
              <span class="absolute inset-0 border-2 border-white rounded-lg"></span>
            </a>
          </div>
        </div>
      </div>

      {showModal && <DevelopersModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;

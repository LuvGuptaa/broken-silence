import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Shiven from "./assets/ShivenSharma.jpg";
import Dhruv from "./assets/DhruvGupta.jpg";
import Sahil from "./assets/SahilMishra.jpg";
import Abhi from "./assets/AbhiPruthi.jpg";
import Yash from "./assets/yash.jpg";
const developers = [
  {
    name: "Shiven Sharma",
    github: "https://github.com/Shiven-Sharmaa",
    linkedin: "https://www.linkedin.com/in/shiven-sharma-aaa226286/",
    instagram: "https://www.instagram.com/shivensharma5/",
    picture: Shiven,
  },
  {
    name: "Dhruv Gupta",
    linkedin:
      "https://www.linkedin.com/in/dhruv-gupta-164b2b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/dhruv._.gupta04?igsh=MXFpdHg5cXVrZmR1aA%3D%3D&utm_source=qr",
    picture: Dhruv,
  },
  {
    name: "Sahil Mishra",
    linkedin:
      "https://www.linkedin.com/in/sahil-mishra-4552811a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    picture: Sahil,
  },
  {
    name: "Abhi Pruthi",
    github: "https://github.com/abhipruthi",
    linkedin: "https://www.linkedin.com/in/abhipruthi/",
    instagram: "https://www.instagram.com/abhipruthi_/",
    picture: Abhi,
  },
  {
    name: "Yash",
    linkedin: "https://www.linkedin.com/in/yash83968",
    instagram: "https://www.instagram.com/yashh.x_x",
    picture: Yash,
  },
];

const DevelopersModal = ({ onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/80 z-30 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full  sm:h-full lg:h-fit">
        <button
          className="text-white absolute top-4 right-4 font-bold outline-[rgb(236, 232, 225) solid 1px] outline-offset-4 bg-[black] border border-black rounded-lg px-4 py-2 hover:bg-white hover:text-black transition-colors ease-in-out duration-300"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-4xl font-bold text-center mb-6">Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <img
                src={dev.picture}
                alt={dev.name}
                className="w-24 h-24 rounded-full mb-4 bg-center object-cover"
              />
              <h3 className="font-bold text-lg mb-2">{dev.name}</h3>
              <div className="flex space-x-4">
                {dev.github && (
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-xl text-black hover:text-gray-600" />
                  </a>
                )}
                {dev.linkedin && (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800" />
                  </a>
                )}
                {dev.instagram && (
                  <a
                    href={dev.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-xl text-pink-500 hover:text-pink-700" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopersModal;

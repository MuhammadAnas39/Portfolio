import React from "react";
import firstOne from "../assets/btc.png";
import me from "../assets/me.jpg";
import crypto from "../assets/crypto.jpg";
import movie from "../assets/movie.jpg";
import image from "../assets/image.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: crypto,
      link: "https://my-crypto-app-kappa.vercel.app/",
      code: "https://github.com/CodingWithAnas1/My-Crypto-app",
    },
    {
      id: 2,
      src: movie,
      link: "https://newmoviesapp.netlify.app/",
      code: "",
    },
    {
      id: 3,
      src: image,
      link: "https://find-photos.netlify.app/",
      code: "https://github.com/CodingWithAnas1/Image-Finder",
    },
    {
      id: 4,
      src: me,
      link: "",
      code: "",
    },
    {
      id: 5,
      src: firstOne,
      link: "",
      code: "",
    },
    {
      id: 6,
      src: me,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <div className="grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-10 md:px-0">
          {portfolios.map(({ src, id, link, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 "
            >
              <img src={src} alt="portfolios" className="rounded-t-lg" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-bold">
                  <a href={link} target="blank">
                    Demo
                  </a>
                </button>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-blue-500 border-2 rounded-md font-bold">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800">
    //   <div className="h-full w-full max-w-screen-lg p-4 mx-auto">
    //     <div className="">
    //       <p className="text-4xl text-white border-b-4 inline border-gray-500 font-bold">
    //         Portfolio
    //       </p>
    //     </div>

    //     <div className="flex flex-wrap justify-evenly ">
    //       {portfolios.map((e) => (
    //         <div className="m-4 border-2 w-52 flex flex-col ">
    //           <div className="text-white">
    //             <img src={me} alt="" className="" />
    //             <p className="text-center">fsdafsd</p>
    //             <div className="flex justify-center items-center gap-10">
    //               <button className="px-3 border-2 my-2 py-4">
    //                 hellow there
    //               </button>
    //               <button className="px-3 border-2 my-2 py-4">
    //                 hellow there
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Portfolio;

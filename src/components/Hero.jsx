import React from "react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-black">
            IEEE <span className="text-purple-600">GHRCEM</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-800">
            IEEE is the trusted voice for engineering, computing, and technology
            information around the globe.
          </p>
        </div>

        <div className="mt-10 relative max-w-5xl mx-auto">
          <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://www.ieee.org/content/dam/ieee-org/ieee/web/org/landing-page-carousel/globe.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div className="absolute inset-0 w-full h-full">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <a
                className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black"
                href=""
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                </svg>
                Check Out More
              </a>
            </div>
          </div>

          <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
            <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
          </div>

          <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

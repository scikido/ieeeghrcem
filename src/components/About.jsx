import React from "react";

export default function About() {
  return (
    <section id="about">
      <section className="bg-white dark:bg-gray-900 font-poppins shadow-lg bg-primary-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg  sm:text-lg text-primary-100 ">
            <h2 className="mb-4 text-4xl tracking-tight font-bold">
              Powering innovation at{" "}
              <span className="font-extrabold">200,000+</span> colleges
              worldwide
            </h2>
            <p className="mb-4 font-light">
              IEEE and its members inspire a global community to innovate for a
              better tomorrow through highly cited publications, conferences,
              technology standards, and professional and educational activities.
              IEEE is the trusted “voice” for engineering, computing, and
              technology information around the globe.
            </p>
            <p className="mb-4 font-medium">
              As the world's largest technical professional organization, IEEE
              offers a number of ways to get involved with technical and local
              communities. These communities are active participants in research
              and authorship, conferences, and important conversations about
              today's most relevant technical topics locally and globally.
            </p>
            <a
              href="https://www.ieee.org/"
              className="inline-flex items-center font-medium  hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

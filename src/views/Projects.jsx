import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import textProj from "../assets/projects/text_case_converter-img.png";
import blogProj from "../assets/projects/blogging_platform-img.png";
import newsProj from "../assets/projects/newspedia-img.png"

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex-row justify-between items-stretch flex-wrap">
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xxl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ width: "50%", padding: 50, margin: "auto" }}>
                <a href="helo">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Blogging platform
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-5">
                  Developed a full-featured blogging platform using the MERN
                  stack, incorporating robust user authentication and profile
                  management. The platform includes dynamic blogging
                  capabilities with rich text formatting, social sharing, and
                  advanced search/filtering options, while prioritizing security
                  through password hashing and authentication best practices.
                  <h5 class="font-bold pt-2">Technologies Used:</h5> HTML, CSS,
                  JavaScript, React.js, Express, Node.js, MongoDB, JWT.
                </p>
                <a
                  href="https://github.com/Nithinreddy147/Blogging-platform"
                  target="_blank"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Source Code
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://blogging-platform.netlify.app/"
                  target="_blank"
                  class="inline-flex items-center mx-3 py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Visit Website
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div style={{ margin: "auto", padding: 40, width: "50%" }}>
                <a
                  href="https://blogging-platform.netlify.app/"
                  target="_blank"
                >
                  <img class="rounded-t-lg w-full" src={blogProj} alt="" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xxl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ width: "50%", padding: 50, margin: "auto" }}>
                <a href="helo">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Text Case Converter Website
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-5">
                  Developed a web-based tool that allows users to effortlessly
                  convert text between upper case, lower case, sentence case,
                  and other formats, enhancing document creation efficiency.
                  <h5 class="font-bold pt-2">Features:</h5> Implemented a
                  user-friendly interface for easy text input and case
                  conversion selection.
                  <h5 class="font-bold pt-2">Technologies Used:</h5> HTML, CSS,
                  JavaScript.
                </p>
                <a
                  href="https://github.com/Nithinreddy147/Text-Case-Converter"
                  target="_blank"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Source Code
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://main--text-case-converter88.netlify.app/"
                  target="_blank"
                  class="inline-flex items-center mx-3 py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Visit Website
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div style={{ margin: "auto", padding: 40, width: "50%" }}>
                <a
                  href="https://main--text-case-converter88.netlify.app/"
                  target="_blank"
                >
                  <img class="rounded-t-lg w-full" src={textProj} alt="" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            class="max-w-xxl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ width: "50%", padding: 50, margin: "auto" }}>
                <a href="helo">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Newswave Aggregator
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-5">
                  Developed a News Aggregator web application using ReactJS,
                  designed to fetch and display news articles from an external
                  API in a user-friendly interface. The application categorizes
                  news for easy browsing and personalized consumption,
                  leveraging modern web technologies to ensure a smooth and
                  responsive user experience.
                  <h5 class="font-bold pt-2">Technologies Used:</h5> HTML, CSS,
                  JavaScript, React.js.
                </p>
                <a
                  href="https://github.com/Nithinreddy147/News-app"
                  target="_blank"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Source Code
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  target="_blank"
                  class="inline-flex items-center mx-3 py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 hidden"
                >
                  Visit Website
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div style={{ margin: "auto", padding: 40, width: "50%" }}>
                <a
                  //href="/"
                  target="_blank"
                >
                  <img class="rounded-t-lg w-full" src={newsProj} alt="" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

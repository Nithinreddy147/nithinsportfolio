import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { projectsData } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-12 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 24 },
              }}
              className={
                darkMode
                  ? "rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  : "rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow"
              }
            >
              <h3 className="text-2xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-blue-500">
                {project.stack}
              </p>
              <p
                className={
                  darkMode
                    ? "mt-4 text-gray-600 text-lg"
                    : "mt-4 text-gray-300 text-lg"
                }
              >
                {project.description}
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                {project.impact.map((point) => (
                  <li
                    key={point}
                    className={
                      darkMode ? "text-gray-700" : "text-gray-200"
                    }
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

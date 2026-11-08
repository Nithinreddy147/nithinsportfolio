import React, { useContext } from "react";
import { profile, techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            A bit about me
          </h4>
          <p
            className={
              darkMode
                ? "mt-4 text-xl text-justify text-gray-500"
                : "mt-4 text-xl text-justify text-white"
            }
          >
            {profile.about}
          </p>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <motion.div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {techStack.map((el) => (
              <motion.div
                key={el.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring" },
                  },
                  hidden: { opacity: 0, y: 40 },
                }}
                className="py-3 px-3 bg-gray-50 rounded-lg flex items-center hover:scale-105 transition-transform cursor-default"
              >
                <img
                  alt={`${el.name} logo`}
                  src={el.link}
                  className="w-10 h-10 object-contain flex-shrink-0"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <h4 className="text-sm ml-3 font-medium">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

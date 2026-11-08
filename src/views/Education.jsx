import React, { useContext } from "react";
import { educationData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import eduBg from "../assets/education.png";

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "pb-20 bg-gray-100" : "pb-20 bg-black"}>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        id="education"
      >
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Education
        </h2>
        <h4 className="mt-12 text-3xl font-semibold text-blue-500">
          Where & What I have Studied
        </h4>
        <div className="flex justify-around items-start gap-8">
          <div className="hidden md:block">
            <img
              width={500}
              height={400}
              className="mt-5"
              alt="Education illustration"
              src={eduBg}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="mt-8 w-full md:w-auto">
            {educationData.map((el) => (
              <motion.div
                key={`${el.name}-${el.time}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0.95 },
                }}
                className={
                  darkMode
                    ? "md:w-96 p-4 bg-white rounded-lg border border-blue-200 mt-8"
                    : "md:w-96 p-4 bg-gray-100 rounded-lg border border-gray-300 mt-8"
                }
              >
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12"
                    src={el.img}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm text-blue-500 font-bold">
                      {el.time}
                    </h4>
                    <p className="text-md mt-1 font-semibold">{el.edu}</p>
                    <p className="text-md text-gray-700">{el.name}</p>
                    {el.detail ? (
                      <p className="text-sm mt-1 text-gray-500">{el.detail}</p>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

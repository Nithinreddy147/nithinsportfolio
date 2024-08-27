import React, { useContext } from "react";
import { educationData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import eduBg from "../assets/education.png";

const Education = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
      // style={{backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="education"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Education
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            Where & What I have Studied
          </h4>
          <div className="flex justify-around">
            <div>
              <img width="500" style={{ marginTop: 20 }} alt="" src={eduBg} />
            </div>
            <div className="mt-8 flex-row md:items-stretch ">
              {educationData.map((el) => (
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  style={{ border: "solid 1px blue" }}
                  className={
                    theme.state.darkMode
                      ? "md:w-96 p-2 bg-white rounded-lg flex-col items-center mt-8"
                      : "md:w-96 p-2 bg-gray-100 rounded-lg flex-col items-center mt-8"
                  }
                >
                  <div className="flex items-center justify-around">
                    <div>
                      <img
                        style={{ width: 50, height: 50 }}
                        src={el.img}
                        alt=""
                      />
                    </div>

                    <div style={{ width: 280 }}>
                      <h4 className="text-sm text-center text-blue-500 font-bold mt-2">
                        {el.time}
                      </h4>
                      <p className="text-md mt-2 text-justify">{el.edu}</p>
                      <p className="text-md mb-2 text-justify">{el.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

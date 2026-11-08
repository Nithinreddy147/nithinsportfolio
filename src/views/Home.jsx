import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { contactLinks, profile } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundImage: `url('${darkMode ? cloud : cloudDark}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen pt-20"
        id="/"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className={darkMode ? "block text-black" : "block text-white"}>
              Hi, I am {profile.shortName}
            </span>
            <span className="block text-blue-500 z-0 text-2xl sm:text-3xl md:text-4xl mt-2">
              {profile.roles[0]}
            </span>
          </h1>
          <p
            className={
              darkMode
                ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            }
          >
            {profile.tagline}
          </p>
          <div className="flex md:justify-start">
            {contactLinks.map((el) => (
              <a
                key={el.name}
                href={el.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={el.name}
                className="mr-5 cursor-pointer mt-8 hover:scale-125 transition-transform"
              >
                <img alt="" src={el.url} width={40} height={40} loading="lazy" />
              </a>
            ))}
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <a
              href={profile.resumePath}
              download="B_V_Nithin_Reddy_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring" },
            },
            hidden: { opacity: 0, y: 80 },
          }}
          src={heroBg}
          alt="Developer illustration"
          width={560}
          height={420}
          className="md:w-3/6 hidden sm:block"
          decoding="async"
        />
      </main>
    </div>
  );
};

export default Home;

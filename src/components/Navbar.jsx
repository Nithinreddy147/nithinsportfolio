import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import lightBulb from "../assets/light bulb.png";
import darkBulb from "../assets/dark bulb.png";

const links = [
  { name: "Home", route: "/" },
  { name: "About", route: "about" },
  { name: "Experience", route: "experience" },
  { name: "Education", route: "education" },
  { name: "Projects", route: "projects" },
  { name: "Contact", route: "contact" },
];

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;

  function toggleTheme() {
    theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" });
  }

  const navLinkClass = darkMode
    ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
    : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md";

  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
            : "bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-xl font-medium whitespace-nowrap text-black"
                  : "text-xl font-medium whitespace-nowrap text-white"
              }
            >
              {`<Nithin/>`}
            </a>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <li key={el.route} className="cursor-pointer">
                  <Link
                    to={el.route}
                    activeClass="text-white bg-blue-500"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    className={navLinkClass}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="ml-4 p-0 bg-transparent border-0"
            >
              <img
                src={darkMode ? lightBulb : darkBulb}
                className="w-10 cursor-pointer hover:scale-110 transition-transform"
                alt=""
                width={40}
                height={40}
              />
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="mr-2 p-0 bg-transparent border-0"
            >
              <img
                src={darkMode ? lightBulb : darkBulb}
                className="w-10 cursor-pointer hover:scale-110 transition-transform"
                alt=""
                width={40}
                height={40}
              />
            </button>
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.5}
              distance="lg"
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { type: "spring" } }}
            exit={{ x: 80, opacity: 0, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-2 px-2 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-44"
                : "bg-black py-2 px-2 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-44"
            }
          >
            <ul className="md:hidden">
              {links.map((el) => (
                <li key={el.route}>
                  <Link
                    to={el.route}
                    activeClass="text-white bg-blue-500"
                    className={
                      darkMode
                        ? "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                        : "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1"
                    }
                    spy={true}
                    smooth={true}
                    offset={-70}
                    onClick={() => setToggle(false)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

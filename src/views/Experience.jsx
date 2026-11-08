import React, { useContext } from "react";
import { experienceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="experience"
      className={darkMode ? "bg-gray-100 pb-20" : "bg-black pb-20"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold text-center"
              : "text-5xl font-bold text-center text-white"
          }
        >
          Experience
        </h2>
        <h4 className="mt-12 text-3xl font-semibold text-blue-500">
          Where I&apos;ve worked
        </h4>
        <div className="mt-8 space-y-8">
          {experienceData.map((job) => (
            <motion.article
              key={`${job.company}-${job.role}-${job.time}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 24 },
              }}
              className={
                darkMode
                  ? "bg-white rounded-lg p-6 border border-blue-200 shadow-sm"
                  : "bg-gray-900 rounded-lg p-6 border border-gray-700 text-white"
              }
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-xl object-contain flex-shrink-0 bg-white border border-gray-200 p-1"
                      loading="lazy"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-2xl font-bold">{job.role}</h3>
                    <p className="text-blue-500 font-semibold text-lg">
                      {job.company}
                      {job.employmentType ? ` · ${job.employmentType}` : ""}
                    </p>
                    {job.location ? (
                      <p
                        className={
                          darkMode
                            ? "text-gray-500 text-sm mt-1"
                            : "text-gray-400 text-sm mt-1"
                        }
                      >
                        {job.location}
                      </p>
                    ) : null}
                  </div>
                </div>
                <p
                  className={
                    darkMode
                      ? "text-gray-500 font-medium md:text-right"
                      : "text-gray-300 font-medium md:text-right"
                  }
                >
                  {job.time}
                </p>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-3">
                {job.highlights.map((item) => (
                  <li
                    key={item.slice(0, 48)}
                    className={
                      darkMode ? "text-gray-600 text-lg" : "text-gray-200 text-lg"
                    }
                  >
                    {item}
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

export default Experience;

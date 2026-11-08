import React, { useContext, useState } from "react";
import { contactLinks, profile } from "../constants";
import { ThemeContext } from "../themeProvider";

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const labelClass = darkMode
    ? "block mb-2 text-lg font-medium text-gray-900"
    : "block mb-2 text-lg font-medium text-white";

  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Add REACT_APP_WEB3FORMS_ACCESS_KEY to your .env file."
      );
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: name,
          name,
          email,
          message,
          replyto: email,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please email me directly."
      );
    }
  };

  return (
    <div
      id="contact"
      className={
        darkMode ? "bg-gray-100 pt-12 pb-12" : "bg-black pt-12 pb-12 text-white"
      }
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Contact</h2>
        <div>
          <h4 className="mt-6 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about my work, collaborate, or just say
            hello — I&apos;d love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-6">
          <div className="w-full md:pr-8">
            <form onSubmit={handleSubmit}>
              <div className="my-6">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  disabled={status === "sending"}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  disabled={status === "sending"}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} h-28`}
                  placeholder="Enter your message"
                  required
                  disabled={status === "sending"}
                />
              </div>

              {status === "success" ? (
                <p className="mb-4 text-green-600 font-medium">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="mb-4 text-red-600 font-medium">{errorMessage}</p>
              ) : null}

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <a className="underline" href={`mailto:${profile.email}`}>
                  Send me email directly
                </a>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6">
            <h3 className="text-3xl font-bold">Email</h3>
            <a
              href={`mailto:${profile.email}`}
              className="mb-8 mt-4 font-semibold text-blue-700 break-all"
            >
              {profile.email}
            </a>
            <h3 className="text-3xl font-bold">Phone</h3>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="mb-8 mt-4 font-semibold text-blue-700"
            >
              {profile.phone}
            </a>
            <h3 className="text-3xl font-bold">Location</h3>
            <p className="mt-4 mb-8 md:text-right font-semibold text-blue-700">
              {profile.location}
            </p>
            <h3 className="text-3xl font-bold">Social</h3>
            <ul className="flex">
              {contactLinks.map((el) => (
                <li key={el.name}>
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={el.name}
                    className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 transition-transform flex flex-col justify-center items-center"
                  >
                    <img
                      alt=""
                      src={el.url}
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p
          className={
            darkMode
              ? "text-center text-sm text-gray-500 pt-8"
              : "text-center text-sm text-gray-400 pt-8"
          }
        >
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </div>
  );
};

export default Contact;

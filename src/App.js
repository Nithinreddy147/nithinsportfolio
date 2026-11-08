import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

const About = lazy(() => import("./views/About"));
const Experience = lazy(() => import("./views/Experience"));
const Education = lazy(() => import("./views/Education"));
const Projects = lazy(() => import("./views/Projects"));
const Contact = lazy(() => import("./views/Contact"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Suspense fallback={null}>
            <About />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </Suspense>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;

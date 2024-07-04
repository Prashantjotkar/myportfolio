import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import { Element } from "react-scroll";
import React, { useEffect } from "react";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
function App() {
  return (
      <div >
        <Element name="/Home" className="page" >
          <Home />
        </Element>
        <Element name="/skills" className="page">
          {" "}
          <Skills />
        </Element>
        <Element name="/experience" className="page">
          {" "}
          <Experience />
        </Element>
        <Element name="/projects" className="page">
          {" "}
          <Projects />
        </Element>
        <Element name="/about" className="page">
          {" "}
          <About />
        </Element>
      </div>
  );
}

export default App;

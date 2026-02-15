import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
// On crée les autres sections vides pour l'instant
import About from "./components/sections/About"; // À créer
import Skills from "./components/sections/Skills"; // À créer
import Projects from "./components/sections/Projects"; // À créer
import Contact from "./components/sections/Contact"; // À créer

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

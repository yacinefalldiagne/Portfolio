import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Home from "./sections/Home";
// On crée les autres sections vides pour l'instant
import About from "./sections/About"; // À créer
import Skills from "./sections/Skills"; // À créer
import Projects from "./sections/Projects"; // À créer
import Contact from "./sections/Contact"; // À créer

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

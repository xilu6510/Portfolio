import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import { FacebookChat } from "./components/FacebookChat";

function App() {
  return (
    <>
      <Sidebar />
      <NavBar />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
        <FacebookChat />
      </main>
    </>
  );
}

export default App;

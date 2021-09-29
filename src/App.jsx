import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import About from "./Components/about/About";
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Contact from "./Components/contact/Contact";
import Menu from "./Components/menu/Menu";
import Skills from "./Components/skills/Skills";

import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menusOpen, setMenusOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Skills  menusOpen={menusOpen} setMenusOpen={setMenusOpen}
         skillsOpen={skillsOpen} setSkillsOpen={setSkillsOpen} />
        <Contact />
      </div>
    </div>
  );
}

export default App;

import './App.css';

import NavBar from './components/navbar/NavBar';
import Intro from './components/intro/Intro';
import AboutMe from './components/aboutMe/AboutMe';
import WhatIDo from './components/whatIDo/WhatIDo';
import Skills from './components/skills/Skills';
import GetInTouch from './components/getInTouch/GetInTouch';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <AboutMe />
      <WhatIDo />
      <Skills />
      <GetInTouch />
    </div>
  );
}

export default App;

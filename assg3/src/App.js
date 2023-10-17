import React from 'react';
import "./App.css";
import Sidebar from './component/Sidebar/Sidebar';
import Home from './component/Home/Home';
import Experience from './component/Experience/Experience';
import Skill from './component/Skill/Skill';
import Education from './component/Education/Education';
import About from './component/about/About';
import Interest from './component/Interest/Interest';
import Award from './component/Awards/Awards';


const App = () => {
  return (
  <>
  <Sidebar/>
  <main className='main'>
    <Home />
    <About />
    <Experience />
    <Education />
    <Skill />
    <Interest />
    <Award />
  </main>
  </>
  )
}

export default App
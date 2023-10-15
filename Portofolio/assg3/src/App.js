import React from 'react';
import "./App.css";
import Sidebar from './component/Sidebar/Sidebar';
import Home from './component/Home/Home';
import Experience from './component/Experience/Experience';
import Skill from './component/Skill/Skill';
import Award from './component/Award/Award';
import About from './component/about/About';
import Interest from './component/Interest/Interest';
import Resume from './component/Resume/Resume';
import Portofolio from './component/Portofolio/Portofolio';



const App = () => {
  return (
  <>
  <Sidebar/>
  <main className='main'>
    <Home />
    <About />
    <Experience />
    <Skill />
    <Interest />
    <Award />
    <Resume />
    <Portofolio />
  </main>
  </>
  )
}

export default App
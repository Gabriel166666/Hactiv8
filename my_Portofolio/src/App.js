import React, {Component} from 'react';
import "./App.css";
import Sidebar from './component/Sidebar/Sidebar';
import Home from './component/Home/Home';
import Experience from './component/Experience/Experience';
import Skill from './component/Skill/Skill';
import Education from './component/Education/Education';
import About from './component/about/About';
import Interest from './component/Interest/Interest';
import Award from './component/Awards/Awards';
import { BrowserRouter } from 'react-router-dom';


class App extends Component{
  render(){
  return (
  <BrowserRouter>
  <Sidebar/>
  <main className='main'>

    r
    <Home />
    <About />
    <Experience />
    <Education />
    <Skill />
    <Interest />
    <Award />
  </main>
  </BrowserRouter>
  )
  }
}

export default App
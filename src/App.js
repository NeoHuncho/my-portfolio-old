import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import MyProjects from './components/MyProjects/MyProjects';
import AboutMe from './components/AboutMe/AboutMe';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
  <SideBar/>
 <FrontPage />
<MyProjects id='projects'/>
 <AboutMe id='about-me' />

    </div>
  );
}

export default App;

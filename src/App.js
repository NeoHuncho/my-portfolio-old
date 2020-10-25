import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import MyProjects from './components/MyProjects/MyProjects';
import AboutMe from './components/AboutMe/AboutMe';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
  <NavBar />
  <SideBar/>
 <FrontPage />
<MyProjects id='projects'/>
 <AboutMe id='about-me' />

    </div>
  );
}

export default App;

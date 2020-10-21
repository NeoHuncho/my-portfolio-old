import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import MyProjects from './components/MyProjects/MyProjects';
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  return (
    <div className="App">
  <FrontPage />
  <MyProjects />
  <AboutMe />
    </div>
  );
}

export default App;

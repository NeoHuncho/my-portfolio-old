import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FrontPage from './pages/root-page/components/FrontPage/FrontPage';
import MyProjects from './pages/root-page/components/MyProjects/MyProjects';
import AboutMeRoot from './pages/root-page/components/AboutMe/AboutMe';
import NavBar from './pages/NavBar/NavBar'
import AboutMe from './pages/about-me-page/aboutMe';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" render={e => (
          <React.Fragment >
            <FrontPage />
            <MyProjects id='projects' />
            <AboutMeRoot id='about-me' />
          </React.Fragment>
        )} />
          <Route path="/about-me" component={AboutMe} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import ScrollToTop from "./ScrolllToTop";
import FrontPage from "./pages/root-page/components/FrontPage/FrontPage";
import MyProjectsRoot from "./pages/root-page/components/MyProjects/MyProjects";
import AboutMeRoot from "./pages/root-page/components/AboutMe/AboutMe";
import NavBar from "./pages/NavBar/NavBar";
import AboutMe from "./pages/about-me-page/aboutMe";
import MyProjects from "./pages/my-projects-page/myProjects";
import DesignPortfolio from "./pages/design-portfolio-page/DesignPortfolio";

function App() {
  return (
    <>
      <ScrollToTop />
      <div>
        <NavBar />

        <Route
          exact
          path="/"
          render={(e) => (
            <>
              <FrontPage />
              <MyProjectsRoot id="projects" />
              <AboutMeRoot id="about-me" />
            </>
          )}
        />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/my-projects" component={MyProjects} />
        <Route path="/design-portfolio" component={DesignPortfolio} />
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <App />
  </Router>,
  rootElement
);

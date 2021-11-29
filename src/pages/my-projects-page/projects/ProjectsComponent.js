import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import styled from "styled-components";
import { mediaQueries } from "../../../styling/mediaQueries";

import FrontEndProjects from "./tabs/front-end-projets/FrontEndProjects.js";
import OtherFrontEndProjects from "./tabs/other-front-end-projects/OtherFrontEndProject";
import DataVisualizationProjects from "./tabs/data-visualization/DataVisualization";
import FullStackProjects from "./tabs/full-stack-projects/FullStackProjects";
import ProfessionalWork from "./tabs/professional-work/ProfessionalWork";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Component = styled.div`
  flex-grow: 1;
  background-color: #f5f5f5;
  width: 90%;
  margin: auto;

  @media ${mediaQueries.desktop} {
    margin-top: 2%;
  }
  @media ${mediaQueries.mobile} {
    margin-top: 12%;
    width: 100%;
  }
`;

export default function ProjectsComponent() {
  console.log(isMobile);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Component style={{ backgroundColor: "rgba(0, 0, 0, 0.00)" }}>
      <Tabs
        variant={isMobile ? "scrollable" : ""}
        value={value}
        onChange={handleChange}
        aria-label="project tabs"
        scrollButtons={isMobile ? "on" : "off"}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="Professional Work"
          {...a11yProps(4)}
          style={{ color: "white" }}
        />
        <Tab
          label="Full-Stack Projects"
          {...a11yProps(3)}
          style={{ color: "white" }}
        />
        <Tab
          label="Front-End React (FCC)"
          {...a11yProps(0)}
          style={{ color: "white" }}
        />
        <Tab
          label="Other Front-End Projects"
          {...a11yProps(1)}
          style={{ color: "white" }}
        />
        <Tab
          label="Data Visualization (FCC)"
          {...a11yProps(2)}
          style={{ color: "white" }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <ProfessionalWork />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FullStackProjects />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <FrontEndProjects />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <OtherFrontEndProjects />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <DataVisualizationProjects />
      </TabPanel>
    </Component>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//import { motion } from "framer-motion";
import styled from 'styled-components';
import { mediaQueries } from '../../../styling/mediaQueries';
//import { mediaQueries } from '../../../styling/mediaQueries';


import ProgrammingLanguagesTab from  './Tabs/ProgramingLanguages/ProgrammingLanguagesTab';
import FrontEndTab from './Tabs/FrontEndTechnologies/FrontEndTab';
import BackEndTab from './Tabs/BackEndTechnologies/BackEndTab';
import DatabaseTab from './Tabs/DatabaseTechnologies/DatabaseTab';
import StorageDeploymentTab from './Tabs/StorageDeployment/StorageDeploymentTab';
import DesignToolsTab from './Tabs/DesignTools/DesignToolsTab'

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
        <Box p={3} >
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Component = styled.div`
    flex-grow: 1;
    background-color: #f5f5f5;
    width: 80%;
    margin: auto;

    @media ${mediaQueries.desktop}{
      margin-top:7%;
      height:13vw;
    }
    @media ${mediaQueries.ipadAndIpadPro}{
      margin-top:7%;
      height:20vw;
    }
    @media ${mediaQueries.mobile}{
      margin-top:12%;
      height:70vh;
      width: 90%;
      

    }
`

export default function SpecialtiesComponent() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Component>

      <Tabs
        orientation="horizontal"
        variant="scrollable"
        scrollButtons="on"
        value={value}
        onChange={handleChange}
        aria-label="Horizontal tabs example"
       
      >
        <Tab label="Programming Languages" {...a11yProps(0)} />
        <Tab label="Front-end Technologies" {...a11yProps(1)} />
        <Tab label="Back-end Technologies" {...a11yProps(2)} />
        <Tab label="Database Technologies" {...a11yProps(3)} />
        <Tab label="Storage and Deployment" {...a11yProps(4)} />
        <Tab label="Design Tools" {...a11yProps(5)} />
      </Tabs>
     
      <TabPanel value={value} index={0}>
     <ProgrammingLanguagesTab />
      </TabPanel>
     
      <TabPanel value={value} index={1}>
    <FrontEndTab />
      </TabPanel>
     
      <TabPanel value={value} index={2}>
    <BackEndTab />
      </TabPanel>
     
      <TabPanel value={value} index={3}>
       <DatabaseTab />
      </TabPanel>
     
      <TabPanel value={value} index={4}>
        <StorageDeploymentTab />
      </TabPanel>
     
      <TabPanel value={value} index={5}>
        <DesignToolsTab />
      </TabPanel>
    </Component>
  );
}
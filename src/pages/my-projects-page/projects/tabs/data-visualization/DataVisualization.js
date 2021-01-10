import React from 'react'
import { motion } from "framer-motion";
import { ProjectCard, TechnologiesSection, GLink, Github, ProjectPage, Technology} from '../card_styles'

import react from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png';
import D3 from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/d3.png';
import github from '../../../specialties/Tabs/StorageDeployment/LogoSource/github.png';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import scatterPlot from './images/scatterPlot.png';
import barChart from './images/barChart.png';

function DataVisualizationProjects() {
    return (
      <motion.div intial={{opacity:0}} animate={{ opacity: [0,0,1] }} transition={{ times: [0,0.5,1.1], ease: "easeInOut" }}>
        <ProjectPage >
          <ProjectCard >
            <CardActionArea  href="https://barchartdd3.netlify.app/" target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Bar Chart Project Link"
                height="180"
                image={barChart}
                title="Bar Chart Project Link"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Bar Chart 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Bar Chart using D3
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <Technology title="D3" src={D3}/>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
            <CardActions >
              <GLink href="https://github.com/NeoHuncho/D3-Bar-Chart" target="_blank">
              <Github src={github}  />
              </GLink>
            </CardActions> 
        </ProjectCard>
   
      

     
          <ProjectCard >
            <CardActionArea  href="https://scaterplotgraphdd3.netlify.app/"  target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Scatter Plot Project"
                height="180"
                image={scatterPlot}
                title="Scatter Plot Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Scatter Plot 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 Scatter Plot using D3 
                </Typography>
                <TechnologiesSection >
                <Technology  title="React" src={react}/>
                  <Technology title="D3" src={D3}/>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
            <CardActions >
              <GLink href="https://github.com/NeoHuncho/Scatterplot-Graph-FCC" target="_blank">
              <Github src={github}  />
              </GLink>
            </CardActions> 
        </ProjectCard>
  
      
      
      </ProjectPage>
   </motion.div>
    )
}

export default DataVisualizationProjects;


import React from 'react'
import { motion } from "framer-motion";
import { ProjectCard, TechnologiesSection, GLink, Github, ProjectPage, Technology} from '../card_styles'

import react from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png';
import framer_motion from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/framer-motion.jpg'
import github from '../../../specialties/Tabs/StorageDeployment/LogoSource/github.png';
import styledComponents from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/styledcomponents.png'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import expenseTracker from './images/expenseTracker.png';
import portfolio from './images/portfolio.png';
import toDoList from './images/ToDoList.png';





function OtherFrontEndProjects() {
    return (
      <motion.div intial={{opacity:0}} animate={{ opacity: [0,0,1] }} transition={{ times: [0,0.5,1.1], ease: "easeInOut" }}>
        <ProjectPage >
          <ProjectCard >
            <CardActionArea  href="https://portfoliowebsitewg.netlify.app/#/" target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Portfolio Website"
                height="180"
                image={portfolio}
                title="Portfolio Website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                This Website!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Portfolio Website/ material UI & React Router
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <Technology title="Styled Components" src={styledComponents}/>
                  <Technology title="Framer Motion" src={framer_motion}/> 
                  <GLink href="https://github.com/NeoHuncho/Porfolio-Website" target="_blank">
              <Github src={github}  />
              </GLink>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
        </ProjectCard>
   
      

     
          <ProjectCard >
            <CardActionArea  href="https://expensetracker-reactproject.netlify.app/"  target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Expense Tracker"
                height="180"
                image={expenseTracker}
                title="Expense Tracker"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Expense Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 Online expense traker / with React ContextAPI & Loops 
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <GLink href="https://github.com/NeoHuncho/expense-tracker" target="_blank">
              <Github src={github}  />
              </GLink>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>

        </ProjectCard>
  
      
          <ProjectCard >
            <CardActionArea  href="https://awesome-bohr-10de14.netlify.app/"  target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="180"
                image={toDoList}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                To Do List
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  React To Do List using axios
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <GLink href="https://github.com/NeoHuncho/To-do-list-react/blob/master/package.json"  target="_blank">
              <Github src={github}  />
              </GLink>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
        </ProjectCard>
    
      </ProjectPage>
   </motion.div>
    )
}

export default OtherFrontEndProjects;


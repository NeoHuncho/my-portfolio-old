import React from 'react'
import { motion } from "framer-motion";
import { ProjectCard, TechnologiesSection, GLink, Github, ProjectPage, Technology} from '../card_styles'

import react from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png';
import redux from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/redux.png';
import mongodb from '../../../specialties/Tabs/DatabaseTechnologies/LogoSource/mongodb.png';
import express from '../../../specialties/Tabs/BackEndTechnologies/LogoSource/express.png';
import nodejs from '../../../specialties/Tabs/BackEndTechnologies/LogoSource/nodejs.png'
import github from '../../../specialties/Tabs/StorageDeployment/LogoSource/github.png';
import heroku from '../../../specialties/Tabs/StorageDeployment/LogoSource/heroku.png';


import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import memories from './images/memories.webp';





function FrontEndProjects() {
    return (
      <motion.div intial={{opacity:0}} animate={{ opacity: [0,0,1] }} transition={{ times: [0,0.5,1.1], ease: "easeInOut" }}>
        <ProjectPage >
          <ProjectCard >
            <CardActionArea  href="https://memories-mernstack.netlify.app/" target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Memories Project"
                height="180"
                image={memories}
                title="Memories Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Memories
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               MERN project/ Create posts w/image, like and delete functionality.
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <Technology title="Redux" src={redux}/>
                  <Technology title="MongoDb" src={mongodb}/>
                  <Technology title="Express" src={express}/>
                  <Technology title="NodeJs" src={nodejs}/>
                  <Technology title="Heroku" src={heroku}/>
                  <GLink href="https://github.com/NeoHuncho/memories-MERN" target="_blank">
                <Github src={github}  />
               </GLink>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
        
        </ProjectCard>
   
      

     
        <ProjectCard >
            <CardActionArea  href="https://memories-mernstack.netlify.app/" target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Memories Project"
                height="180"
                image={memories}
                title="Memories Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Memories
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               MERN project/ Create posts w/image, like and delete functionality.
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <Technology title="Redux" src={redux}/>
                  <Technology title="MongoDb" src={mongodb}/>
                  <Technology title="Express" src={express}/>
                  <Technology title="NodeJs" src={nodejs}/>
                  <Technology title="Heroku" src={heroku}/>
                  <GLink href="https://github.com/NeoHuncho/memories-MERN" target="_blank">
                <Github src={github}  />
               </GLink>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
        
        </ProjectCard>
  
      
        <ProjectCard >
            <CardActionArea  href="https://memories-mernstack.netlify.app/" target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Memories Project"
                height="180"
                image={memories}
                title="Memories Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Memories
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
               MERN project/ Create posts w/image, like and delete functionality.
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <Technology title="Redux" src={redux}/>
                  <Technology title="MongoDb" src={mongodb}/>
                  <Technology title="Express" src={express}/>
                  <Technology title="NodeJs" src={nodejs}/>
                  <Technology title="Heroku" src={heroku}/>
                  <GLink href="https://github.com/NeoHuncho/memories-MERN" target="_blank">
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

export default FrontEndProjects;


import React from 'react'
import { motion } from "framer-motion";
import { ProjectCard, TechnologiesSection, GLink, Github, ProjectPage, Technology} from '../card_styles'

import react from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png';
import redux from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/redux.png';
import framer_motion from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/framer-motion.jpg'
import github from '../../../specialties/Tabs/StorageDeployment/LogoSource/github.png';
import marked from './images/marked.svg'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import markdownConverterimg from '../front-end-projets/images/markdown-converter.png';
import calculatorReact from './images/calculatorReact.png';
import drumpadReact from './images/drumpadReact.png';





function FrontEndProjects() {
    return (
      <motion.div intial={{opacity:0}} animate={{ opacity: [0,0,1] }} transition={{ times: [0,0.5,1.1], ease: "easeInOut" }}>
        <ProjectPage >
          <ProjectCard >
            <CardActionArea  href="https://drumpadreact.netlify.app/" target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="180"
                image={drumpadReact}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Drum Pad 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Online Drum Pad w/ keyboard keys- Sound Bar - Bank Switcher
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <Technology title="Redux" src={redux}/>
                  <Technology title="Framer Motion" src={framer_motion}/> 
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
            <CardActions >
              <GLink href="https://github.com/NeoHuncho/drum-machine" target="_blank">
              <Github src={github}  />
              </GLink>
            </CardActions> 
        </ProjectCard>
   
      

     
          <ProjectCard >
            <CardActionArea  href="https://markdown-previewer-react1.netlify.app/"  target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Markdown Converter project"
                height="180"
                image={markdownConverterimg}
                title="Markdown Converter project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Markdown Converter 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 HTML5 Markdown converter w/ instant conversion 
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                  <Technology  title="Marked" src={marked}/>
                
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
            <CardActions >
              <GLink href="https://github.com/NeoHuncho/Markdown-Previewer" target="_blank">
              <Github src={github}  />
              </GLink>
            </CardActions> 
        </ProjectCard>
  
      
          <ProjectCard >
            <CardActionArea  href="https://calculatoreact.netlify.app/"  target="_blank" style={{ textDecoration: 'none' }} > 
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="180"
                image={calculatorReact}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5"  component="h2">
                Calculator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Simple online calculator 
                </Typography>
                <TechnologiesSection >
                  <Technology  title="React" src={react}/>
                </TechnologiesSection >
              
              </CardContent>
          
            </CardActionArea>
            <CardActions >
              <GLink href="https://github.com/NeoHuncho/calculator/"  target="_blank">
              <Github src={github}  />
              </GLink>
            </CardActions> 
        </ProjectCard>
    
      </ProjectPage>
   </motion.div>
    )
}

export default FrontEndProjects;

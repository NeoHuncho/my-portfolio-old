import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { mediaQueries } from '../../../../../styling/mediaQueries';

import react from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png';
import redux from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/redux.png';
import framer_motion from '../../../specialties/Tabs/FrontEndTechnologies/LogoSource/framer-motion.jpg'
import github from '../../../specialties/Tabs/StorageDeployment/LogoSource/github.png'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import markdownConverterimg from '../front-end-projets/images/markdown-converter.png';
import calculatorReact from './images/calculatorReact.png';
import drumpadReact from './images/drumpadReact.png';


const Page= styled.div`
@media ${mediaQueries.desktop}{
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0% 0px;
  grid-template-areas:
    ". .";
    justify-items: center;
}
`

const ProjectCard = styled(Card)`
max-width:445px;
max-height:360px;
:nth-child(n+3) {
  margin-top:5%;   
}
`



const TechnologiesSection = styled(motion.div)`
display: flex;
position: relative;
`

const Technology =  styled.img`
padding-top:4%;
:nth-child(n+2) {
  margin-left:5%;   
}
max-width:6%;
max-height:auto;
`

const GLink = styled.a`
display: flex;
position: relative;
`

const Github= styled.img`
max-width:6%;
margin-left: auto; 
margin-right: 1%;

`



function FrontEndProjects() {
    return (
        <Page>
        <motion.div intial={{opacity:0}} animate={{ opacity: [0,0,1] }} transition={{ times: [0,0.4,1], ease: "easeInOut" }}>
          <ProjectCard >
            <CardActionArea  href="https://drumpadreact.netlify.app/" style={{ textDecoration: 'none' }} > 
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
              <GLink href="https://drumpadreact.netlify.app/">
              <Github src={github}  />
              </GLink>
            </CardActions> 
        </ProjectCard>
      </motion.div>
      

      <ProjectCard >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image={markdownConverterimg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </ProjectCard>

      <ProjectCard >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </ProjectCard>

      <ProjectCard >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </ProjectCard>

      </Page>
    )
}

export default FrontEndProjects;


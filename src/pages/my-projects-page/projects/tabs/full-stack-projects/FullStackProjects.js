import React from "react";
import { motion } from "framer-motion";
import {
  ProjectCard,
  TechnologiesSection,
  // GLink,
  // Github,
  ProjectPage,
  Technology,
  TitleSection,
  GLplatform,
  Firebase,
  // Express,
  NodeJS,
} from "../card_styles";

import react from "../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png";
import python from "../../../specialties/Tabs/ProgramingLanguages/logos/python.png";
import redux from "../../../specialties/Tabs/FrontEndTechnologies/LogoSource/redux.png";
import styledComponents from "../../../specialties/Tabs/FrontEndTechnologies/LogoSource/styledcomponents.png";
import fireBase from "../../../specialties/Tabs/DatabaseTechnologies/LogoSource/firebase.png";
// import mongodb from "../../../specialties/Tabs/DatabaseTechnologies/LogoSource/mongodb.png";
// import express from "../../../specialties/Tabs/BackEndTechnologies/LogoSource/express.png";
import glPlatform from "../../../specialties/Tabs/BackEndTechnologies/LogoSource/gcPlatform.png";
import nodejs from "../../../specialties/Tabs/BackEndTechnologies/LogoSource/nodejs.png";
// import github from "../../../specialties/Tabs/StorageDeployment/LogoSource/github.png";
// import heroku from "../../../specialties/Tabs/StorageDeployment/LogoSource/heroku.png";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import greenCrypto from "./images/greenCrypto.png";
import brawlMax from "./images/brawlMax.png";

function FrontEndProjects() {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ times: [0, 0.5, 1.1], ease: "easeInOut" }}
    >
      <ProjectPage>
        <ProjectCard>
          <CardActionArea
            href="https://play.google.com/store/apps/details?id=com.brawlMax.brawlMax"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="Brawl Max Project"
              height="180"
              image={brawlMax}
              title="Brawl Max Project"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Brawl Max
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                React Native game-companion app. Available on Android & IOS.
              </Typography>
              <TechnologiesSection>
                <Technology title="React" src={react} />
                <Technology title="Redux" src={redux} />
                <Technology title="Redux" src={python} />
                <GLplatform title="Google Cloud Platform" src={glPlatform} />
                <Firebase title="Firebase" src={fireBase} />
                {/*  <Technology title="NodeJs" src={nodejs} />
                <Technology title="Heroku" src={heroku} /> */}
              </TechnologiesSection>
            </CardContent>
          </CardActionArea>
        </ProjectCard>

        <ProjectCard>
          <CardActionArea
            href="https://www.greencrypto.wiki/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="Green Crypto Project"
              height="180"
              image={greenCrypto}
              title="Green Crypto Project"
            />
            <CardContent>
              <TitleSection>
                <Typography gutterBottom variant="h5" component="h2">
                  Green Crypto{" "}
                </Typography>
                {/* <GLink
                  href="https://github.com/NeoHuncho/memories-MERN"
                  target="_blank"
                >
                  <Github src={github} />
                </GLink> */}
              </TitleSection>

              <Typography variant="body2" color="textSecondary" component="p">
                Website listing various crypto currencies and there impact on
                the environment.
              </Typography>
              <TechnologiesSection>
                <Technology title="React" src={react} />
                <Technology title="Redux" src={redux} />
                <Technology title="Styled Components" src={styledComponents} />
                <NodeJS title="NodeJs" src={nodejs} />
                <GLplatform title="Google Cloud Platform" src={glPlatform} />
                <Firebase title="Firebase" src={fireBase} />
              </TechnologiesSection>
            </CardContent>
          </CardActionArea>
        </ProjectCard>

        <ProjectCard></ProjectCard>
      </ProjectPage>
    </motion.div>
  );
}

export default FrontEndProjects;

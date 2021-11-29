import React from "react";
import { motion } from "framer-motion";
import {
  ProjectCard,
  TechnologiesSection,

  ProjectPage,
  Technology,
  TitleSection,
  Firebase,
  NodeJS,
  WOO,
  PHP,
} from "../card_styles";

import react from "../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png";
import redux from "../../../specialties/Tabs/FrontEndTechnologies/LogoSource/redux.png";
import fireBase from "../../../specialties/Tabs/DatabaseTechnologies/LogoSource/firebase.png";
import nodejs from "../../../specialties/Tabs/BackEndTechnologies/LogoSource/nodejs.png";
import rnNavigation from "../../../specialties/Tabs/FrontEndTechnologies/LogoFinal/RNNavigation.png";
import php from "../../../specialties/Tabs/FrontEndTechnologies/LogoFinal/PHP.png";
import WP from "../../../specialties/Tabs/FrontEndTechnologies/LogoFinal/Wordpress.png";
import Woo from "../../../specialties/Tabs/BackEndTechnologies/LogoFinal/WooCommerce.png";
import Algolia from "../../../specialties/Tabs/BackEndTechnologies/LogoFinal/algolia.png";
import MySQL from "../../../specialties/Tabs/DatabaseTechnologies/LogoFinal/Mysql-01.webp";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import CPWeb from "./images/CPWeb.png";
import CPMobile from "./images/CPMobile.png";

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
            href="https://play.google.com/store/apps/details?id=com.paprikaapp"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="Brawl Max Project"
              height="180"
              image={CPMobile}
              title="Cagette & Paprika Mobile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Cagette & Paprika React Native App
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Groceries Home delivery App. Available for users from Lille
                (France), on Android & IOS.
              </Typography>
              <TechnologiesSection>
                <Technology title="React" src={react} />
                <Technology title="Redux" src={redux} />
                <Technology
                  title="React Native Navigation"
                  src={rnNavigation}
                />
                <Firebase title="Firebase" src={fireBase} />
              </TechnologiesSection>
            </CardContent>
          </CardActionArea>
        </ProjectCard>

        <ProjectCard>
          <CardActionArea
            href="https://www.cagette-et-paprika.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="Memories Project"
              height="180"
              image={CPWeb}
              title="Memories Project"
            />
            <CardContent>
              <TitleSection>
                <Typography gutterBottom variant="h5" component="h2">
                  Cagette & Paprika PHP website + back-end
                </Typography>
              </TitleSection>

              <Typography variant="body2" color="textSecondary" component="p">
                Groceries Home delivery website. Wordpress with Woocommerce.
              </Typography>
              <TechnologiesSection>
                <Technology title="WordPress" src={WP} />
                <PHP title="PHP" src={php} />
                <Technology title="MySQL" src={MySQL} />
                <WOO title="WooCommerce" src={Woo} />
                <Technology title="Algolia" src={Algolia} />
                <NodeJS title="NodeJs" src={nodejs} />
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

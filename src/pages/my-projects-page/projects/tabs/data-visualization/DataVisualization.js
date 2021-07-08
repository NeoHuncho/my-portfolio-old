import React from "react";
import { motion } from "framer-motion";
import {
  ProjectCard,
  TechnologiesSection,
  TitleSection,
  GLink,
  Github,
  ProjectPage,
  Technology,
} from "../card_styles";

import react from "../../../specialties/Tabs/FrontEndTechnologies/LogoSource/react.png";
import D3 from "../../../specialties/Tabs/FrontEndTechnologies/LogoSource/d3.png";
import github from "../../../specialties/Tabs/StorageDeployment/LogoSource/github.png";

import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import scatterPlot from "./images/scatterPlot.webp";
import barChart from "./images/barChart.webp";

function DataVisualizationProjects() {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ times: [0, 0.5, 1.1], ease: "easeInOut" }}
    >
      <ProjectPage>
        <ProjectCard>
          <CardActionArea
            href="https://barchartdd3.netlify.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="Bar Chart Project Link"
              height="180"
              image={barChart}
              title="Bar Chart Project Link"
            />
            <CardContent>
              <TitleSection>
                <Typography gutterBottom variant="h5" component="h2">
                  Bar Chart
                </Typography>
                <GLink
                  href="https://github.com/NeoHuncho/D3-Bar-Chart"
                  target="_blank"
                >
                  <Github src={github} />
                </GLink>
              </TitleSection>
              <Typography variant="body2" color="textSecondary" component="p">
                Bar Chart using D3
              </Typography>
              <TechnologiesSection>
                <Technology title="React" src={react} />
                <Technology title="D3" src={D3} />
              </TechnologiesSection>
            </CardContent>
          </CardActionArea>
        </ProjectCard>

        <ProjectCard>
          <CardActionArea
            href="https://scaterplotgraphdd3.netlify.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="Scatter Plot Project"
              height="180"
              image={scatterPlot}
              title="Scatter Plot Project"
            />
            <CardContent>
              <TitleSection>
                <Typography gutterBottom variant="h5" component="h2">
                  Scatter Plot
                </Typography>
                <GLink
                  href="https://github.com/NeoHuncho/Scatterplot-Graph-FCC"
                  target="_blank"
                >
                  <Github src={github} />
                </GLink>
              </TitleSection>
              <Typography variant="body2" color="textSecondary" component="p">
                Scatter Plot using D3
              </Typography>
              <TechnologiesSection>
                <Technology title="React" src={react} />
                <Technology title="D3" src={D3} />
              </TechnologiesSection>
            </CardContent>
          </CardActionArea>
        </ProjectCard>

        {/* <ProjectCard>
          <CardActionArea
            href="https://scaterplotgraphdd3.netlify.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="Scatter Plot Project"
              height="180"
              image={scatterPlot}
              title="Scatter Plot Project"
            />
            <CardContent>
              <TitleSection>
                <Typography gutterBottom variant="h5" component="h2">
                  Scatter Plot
                </Typography>
                <GLink
                  href="https://github.com/NeoHuncho/Scatterplot-Graph-FCC"
                  target="_blank"
                >
                  <Github src={github} />
                </GLink>
              </TitleSection>
              <Typography variant="body2" color="textSecondary" component="p">
                Scatter Plot using D3
              </Typography>
              <TechnologiesSection>
                <Technology title="React" src={react} />
                <Technology title="D3" src={D3} />
              </TechnologiesSection>
            </CardContent>
          </CardActionArea>
        </ProjectCard>*/}
      </ProjectPage>
    </motion.div>
  );
}

export default DataVisualizationProjects;

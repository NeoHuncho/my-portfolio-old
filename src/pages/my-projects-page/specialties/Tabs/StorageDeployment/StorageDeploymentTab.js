import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import github from "./LogoFinal/github-01.png";
import heroku from "./LogoFinal/heroku-01.png";
import netlify from "./LogoFinal/netlify-01.png";
import npm from "./LogoFinal/npm-01.png";

import { mediaQueries } from "../../../../../styling/mediaQueries";

const Image = styled(motion.img)`
  max-width: 35%;
  @media ${mediaQueries.ipadAndIpadPro} {
    max-width: 6vh;
  }
  @media ${mediaQueries.mobile} {
    max-width: 15vh;
    padding-top: 8vh;

    :nth-child(odd) {
      float: left;
    }

    :nth-child(even) {
      float: right;
    }
  }
`;
const Grid = styled(motion.div)`
  @media ${mediaQueries.nonmobile} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "github heroku netlify npm";
    justify-items: center;
  }
`;

function StorageDeploymentTab() {
  return (
    <Grid
      intial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 2] }}
      transition={{ times: [0, 0.5, 1.2], ease: "easeInOut" }}
    >
      <Image src={github} style={{ gridArea: "github" }} />
      <Image src={heroku} style={{ gridArea: "heroku" }} />
      <Image src={netlify} style={{ gridArea: "netlify" }} />
      <Image src={npm} style={{ gridArea: "npm" }} />
    </Grid>
  );
}

export default StorageDeploymentTab;

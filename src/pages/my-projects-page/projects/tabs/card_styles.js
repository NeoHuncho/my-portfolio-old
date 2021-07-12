import Card from "@material-ui/core/Card";
import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQueries } from "../../../../styling/mediaQueries";

export const ProjectPage = styled.div`
  @media ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0% 0px;
    grid-template-areas: ". .";
    justify-items: center;
  }
`;

export const ProjectCard = styled(Card)`
  @media ${mediaQueries.desktop} {
    max-width: 60vh;
    max-height: 320px;
    :nth-child(n + 3) {
      margin-top: 5%;
    }
  }
  @media ${mediaQueries.nondesktop} {
    margin-bottom: 8%;
  }
`;

export const TitleSection = styled(motion.div)`
  display: flex;
`;

export const TechnologiesSection = styled(motion.div)`
  padding-top: 3%;
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "tech github";
`;

export const TechnologiesSection1Liner = styled(TechnologiesSection)`
  margin-top: 1vh;
`;

export const Technology = styled.img`
  grid-area: tech;
  max-width: 7%;

  max-height: fit-content;
  :nth-child(2) {
    margin-left: 14%;
  }
  :nth-child(3) {
    margin-left: 28%;
  }
  :nth-child(4) {
    margin-left: 42%;
  }
  :nth-child(5) {
    margin-left: 56%;
  }
  :nth-child(6) {
    margin-left: 70%;
  }
`;

export const Express = styled(Technology)`
  margin-top: 2%;
  margin-left: 41%;
  max-width: 10%;
`;
export const GLplatform = styled(Technology)`
  margin-top: -2%;

  max-width: 12%;
`;
export const Firebase = styled(Technology)`
  margin-top: -2%;
  max-width: 11%;
`;
export const NodeJS = styled(Technology)`
  margin-left: 56%;
  margin-top: 2%;
  max-width: 10%;
`;

export const GLink = styled.a``;

export const Github = styled.img`
  width: 20px;
  margin-left: 50%;
  margin-top: 20%;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import {
  FullPage,
  SecondaryTitle,
  TitleSection,
  LineBottom,
  LineTop,
} from "../../../styling/styles";

import second_page_image from "./second page image-01-min.png";

import { useInView } from "react-intersection-observer";
import { mediaQueries } from "../../../styling/mediaQueries";

const ThisPage = styled(FullPage)`
  @media ${mediaQueries.mobile} {
    height: 100%;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    height: 135vh;
    width: 100%;
  }
`;

const Grid = styled.div`
  @media ${mediaQueries.desktop} {
    margin-top: 5vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
    gap: 0px 0px;
    grid-template-areas:
      "title"
      "content";
  }
`;

const InnerGrid = styled.div`
  @media ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    gap: 0px 0px;
    grid-template-areas: "image paragraph";
    grid-area: content;
  }
  margin-top: 5vh;
`;

const ThisTitleSection = styled(TitleSection)`
  @media ${mediaQueries.nondesktop} {
    width: 100%;
  }
  @media ${mediaQueries.mobile} {
    margin-left: 4vw;
  }

  @media ${mediaQueries.ipadAndIpadPro} {
    margin-left: 4vw;
  }

  @media ${mediaQueries.desktop} {
    grid-area: title;
  }
`;

const ImageSection = styled(motion.div)`
  @media ${mediaQueries.desktop} {
    grid-area: image;
    margin-left: 1vw;
  }
  @media ${mediaQueries.nondesktop} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 5vh;
  }
`;

const Svg = styled(motion.img)`
  @media ${mediaQueries.nondesktop} {
    width: 50vw;
  }

  @media ${mediaQueries.desktop} {
    width: 65vh;
  }
`;

const Paragraph = styled(motion.p)`
  font-family: Roboto;
  font-weight: 300;
  color: #ffffff;
  font-style: normal;
  text-align: justify;
  grid-area: paragraph;

  @media ${mediaQueries.mobile} {
    line-height: 3.5vh;
    margin-top: 3vh;
    margin-left: 4vh;
    margin-right: 4vh;
    font-size: 2vh;
  }
  @media ${mediaQueries.ipadAndIpadPro} {
    line-height: 3.2vh;
    bottom: 1vh;
    font-size: 2vh;
    padding-left: 4vw;
    padding-right: 4vw;
  }

  @media ${mediaQueries.desktop} {
    grid-area: paragraph;
    text-align: center;
    margin-top: 10%;
    margin-right: 20%;
    line-height: 4vh;
    font-size: 1.5vw;
    height: 100%;
  }
`;

export const ThisLineTop = styled(LineTop)`
  margin-top: 0vh;
`;

export default function MoreInformation() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <ThisPage ref={ref} style={{ zIndex: 1 }}>
      <Grid>
        <ThisTitleSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          <SecondaryTitle>More Information.</SecondaryTitle>
          <ThisLineTop />
          <LineBottom />
        </ThisTitleSection>

        <InnerGrid>
          <ImageSection
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.25 }}
            animate={{ opacity: inView ? 1 : 0 }}
          >
            <Svg
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity,
              }}
              src={second_page_image}
              alt="Computer"
            />
          </ImageSection>
          <Paragraph
            initial={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.25 }}
            animate={{ opacity: inView ? 1 : 0 }}
          >
            I have a driving license, but I prefer to bike/public transport{" "}
            <span role="img" aria-label="image">
              🚴
            </span>{" "}
            <br /> <br />I live in Lille, France. (Quartier Fives){" "}
            <span role="img" aria-label="image">
              🏠
            </span>{" "}
            <br /> <br />
            Before coding daily, I wanted to become a motion designer. I am
            therefore competent in Adobe After Effect & Illustrator.{" "}
            <span role="img" aria-label="image">
              💻
            </span>{" "}
            <br /> <br />I am a big fan of virtual reality and own an Oculus
            Quest 2 right now.{" "}
            <span role="img" aria-label="image">
              🎮
            </span>{" "}
            <br /> <br />I am vegetarian.{" "}
            <span role="img" aria-label="image">
              🥦
            </span>{" "}
            <br /> <br />I am concerned about climate change.{" "}
            <span role="img" aria-label="image">
              🔥
            </span>{" "}
            <br /> <br />I enjoy coding as it allows to learn and improve every
            day{" "}
            <span role="img" aria-label="image">
              💻
            </span>{" "}
            <br /> <br />
          </Paragraph>
        </InnerGrid>
      </Grid>
    </ThisPage>
  );
}

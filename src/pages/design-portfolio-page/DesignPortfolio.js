import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import summitAd from "./summitAdPreview.png";
import summitRecap from "./summitAd2Preview.png";
import meetGreet from "./summitAd3Preview.png";
import ytVideo from "./summitAd4Preview.png";

import { Title, LineBottom } from "../../styling/styles";
import { mediaQueries } from "../../styling/mediaQueries";

const ThisTitleSection = styled(motion.div)`
  @media ${mediaQueries.nonmobile} {
    align-items: center;
    align-content: center;
    align-self: center;
    margin-top: 10vh;
  }
  @media ${mediaQueries.mobile} {
    align-items: center;
    align-content: center;
    align-self: center;
    margin-top: 6vh;
  }
`;

const ThisTitle = styled(Title)`
  text-align: center;
  @media ${mediaQueries.mobile} {
    font-size: 8vw;
  }
`;
const ThisLineBottom = styled(LineBottom)`
  @media ${mediaQueries.mobile} {
    display: none;
  }
`;
const SecondaryTitle = styled(ThisTitle)`
  @media ${mediaQueries.nonmobile} {
    font-size: 4vw;
    text-align: right;
  }
`;

const ThisGrid = styled(motion.div)`
  @media ${mediaQueries.nonmobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 0px 0px;
    align-items: center;

    margin-top: 10vh;
  }
`;

const ThisPage = styled.section`
  width: 100%;

  height: auto;

  position: absolute;
  background: radial-gradient(
    50% 98.88% at 50% 50%,
    #16045e 18.23%,
    #0e021e 100%
  );
`;

const ThisImage = styled(motion.img)`
  @media ${mediaQueries.nonmobile} {
    width: 35vw;
  }
  @media ${mediaQueries.mobile} {
    width: 65vw;
    margin-bottom: 4vh;
\
  }
`;

const TextSection = styled(motion.div)`
  @media ${mediaQueries.nonmobile} {
    margin-right: 10vw;
  }
`;
const ImageSection = styled(motion.div)`
  @media ${mediaQueries.nonmobile} {
    margin-right: 10vw;
  }
  @media ${mediaQueries.mobile} {
    margin-left: 18vw;
  }
`;
export default function FrontPage() {
  const variantstext = {
    hiddenTitle: { opacity: 0, y: -50 },
    visibleTitle: { opacity: 1, y: 0 },
    hiddenSubTitle: { x: -100 },
    visibleSubTitle: { x: 0 },
    hiddenImage: { x: 100 },
    visibleImage: { x: 0 },
  };
  return (
    <ThisPage>
      <ThisTitleSection
        initial="hiddenTitle"
        animate="visibleTitle"
        variants={variantstext}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <ThisTitle>DESIGN PORTFOLIO</ThisTitle>
      </ThisTitleSection>
      <ThisGrid>
        <TextSection
          initial="hiddenSubTitle"
          animate="visibleSubTitle"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/Feht1FbqXA0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryTitle>Event Video Ad</SecondaryTitle>
            <ThisLineBottom />
          </a>
        </TextSection>
        <ImageSection
          initial="hiddenImage"
          animate="visibleImage"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/Feht1FbqXA0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ThisImage
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity,
              }}
              src={summitAd}
            />
          </a>
        </ImageSection>
      </ThisGrid>
      <ThisGrid>
        <TextSection
          initial="hiddenSubTitle"
          animate="visibleSubTitle"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/qAqqszKp8n4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryTitle>Event Video Recap</SecondaryTitle>
            <ThisLineBottom />
          </a>
        </TextSection>
        <ImageSection
          initial="hiddenImage"
          animate="visibleImage"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/qAqqszKp8n4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ThisImage
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity,
              }}
              src={summitRecap}
            />
          </a>
        </ImageSection>
      </ThisGrid>
      <ThisGrid>
        <TextSection
          initial="hiddenSubTitle"
          animate="visibleSubTitle"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/LYFqmZyA1YA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryTitle>Event Footage</SecondaryTitle>
            <ThisLineBottom />
          </a>
        </TextSection>
        <ImageSection
          initial="hiddenImage"
          animate="visibleImage"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/LYFqmZyA1YA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ThisImage
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity,
              }}
              src={meetGreet}
            />
          </a>
        </ImageSection>
      </ThisGrid>
      <ThisGrid style={{ marginBottom: "5vh" }}>
        <TextSection
          initial="hiddenSubTitle"
          animate="visibleSubTitle"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/SF_1azNQ300"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryTitle>YT video (Unfished)</SecondaryTitle>
            <ThisLineBottom />
          </a>
        </TextSection>
        <ImageSection
          initial="hiddenImage"
          animate="visibleImage"
          variants={variantstext}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <a
            href="https://youtu.be/SF_1azNQ300"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ThisImage
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity,
              }}
              src={ytVideo}
            />
          </a>
        </ImageSection>
      </ThisGrid>
    </ThisPage>
  );
}

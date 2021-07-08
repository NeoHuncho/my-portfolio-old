import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styled from "styled-components";

import { PointList, SubPointList } from "../../../styling/styles";
import { mediaQueries } from "../../../styling/mediaQueries";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const Timeline = styled.ul`
  width: 90%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  list-style: none;

  //this is the line in the center of the timeline      //this is the line in the center of the timeline

  @media ${mediaQueries.mobile} {
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 2%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: gray;
    }
  }

  @media ${mediaQueries.nonmobile} {
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: gray;
    }
  }
`;

export const Point = styled.li`
  font-size: 16px;
  line-height: 30px;
  font-weight: 350;
  @media ${mediaQueries.nonmobile} {
    padding-bottom: 3%;
  }
`;

export const SubPoint = styled(Point)`
  font-size: 15px;
  line-height: 22px;
  font-weight: 250;
  @media ${mediaQueries.mobile} {
    line-height: 22px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`;

export const TimelineContent = styled(motion.li)`
  padding: 20px;
  background-color: #343434;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
  @media ${mediaQueries.nonmobile} {
    width: 50%;
    margin-bottom: 50px;
    position: relative;

    :nth-child(odd) {
      float: left;
      clear: right;
      transform: translateX(-70px);
      border-radius: 20px 0px 20px 20px;
    }

    :nth-child(even) {
      float: right;
      clear: left;
      transform: translateX(30px);
      border-radius: 0px 20px 20px 20px;
    }

    //This is the small button next to each event //This is the small button next to each event
    ::before {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: gray;
      top: 0px;
    }

    :nth-child(odd)::before {
      transform: translate(50%, -50%);
      right: -30px;
    }
    :nth-child(even)::before {
      transform: translate(-50%, -50%);
      left: -30px;
    }

    :hover::before {
      background-color: aqua;
    }
  }
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 6%;
`;

export const Date = styled(motion.h3)`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
  @media ${mediaQueries.nonmobile} {
    position: absolute;
    top: -30px;
  }
`;

export default function TimeLineComponent() {
  /*<ScrollWrapper>
    <InView threshold={0.25}>
      {({ ref, inView, entry }) => (
        <>
          <InViewBlock ref={ref} inView={inView}>
            <InViewIcon inView={inView} />
          </InViewBlock>
        </>
      )}
    </InView>*/

  const variantstext = {
    hidden: { opacity: 0 },
  };
  return (
    <Container>
      <Timeline>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <TimelineContent
              ref={ref}
              initial={variantstext.hidden}
              animate={{ opacity: inView ? 1 : 0 }}
            >
              <Date>6th april, 1999</Date>
              <Heading> Joining Earth</Heading>

              <PointList>
                <Point>
                  Born in France to à speaking English mother and a French
                  speaking dad{" "}
                </Point>
                <Point>
                  Remained in france for the remaining 18 years of my life{" "}
                </Point>
                <Point>
                  Went to a multi-nationality school and the school my school
                  classes half in French and half in English
                </Point>
              </PointList>
            </TimelineContent>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <TimelineContent
              ref={ref}
              initial={variantstext.hidden}
              animate={{ opacity: inView ? 1 : 0 }}
            >
              <Date>1st may, 2014</Date>
              <Heading>HTML and CSS</Heading>
              <PointList>
                <Point>Started to learn HTML and CSS at 15 y/o</Point>
                <Point>
                  Learned through a book called get coding with multiple small
                  projects{" "}
                </Point>
                <Point>
                  Coding has always been my passion from then onward{" "}
                </Point>
              </PointList>
            </TimelineContent>
          )}
        </InView>

        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <TimelineContent
              ref={ref}
              initial={variantstext.hidden}
              animate={{ opacity: inView ? 1 : 0 }}
            >
              <Date>1st September, 2018</Date>
              <Heading>University</Heading>
              <PointList>
                <Point>
                  Started studying at Concordia University in Montreal Canada{" "}
                </Point>
                <Point>Studied business technology management </Point>
                <Point>
                  earned a bachelor's degree with a 3.7 gpa in business
                  technology management major and a 3.0 GPA overall.{" "}
                </Point>
                <Point>Example of classes I took:</Point>
                <SubPointList>
                  <SubPoint>
                    Introduction to Business Applicant Development(C#)
                  </SubPoint>
                  <SubPoint>Database Management(MySql)</SubPoint>
                  <SubPoint>
                    Information Systems Analysis/ Design and Implementation/
                    Strategy, Management, and Sourcing
                  </SubPoint>
                  <SubPoint>
                    The Management of Digital Privacy in Society
                  </SubPoint>
                  <SubPoint>E-Business</SubPoint>
                </SubPointList>
              </PointList>
            </TimelineContent>
          )}
        </InView>

        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <TimelineContent
              ref={ref}
              initial={variantstext.hidden}
              animate={{ opacity: inView ? 1 : 0 }}
            >
              <Date>28th November, 2019</Date>
              <Heading>FreeCodeCamp</Heading>
              <PointList>
                <Point>
                  Started to use FreeCodeCamp to learn and practice the skills
                  of full-stack dev.{" "}
                </Point>
                <Point>Completed the following certifications: </Point>
                <SubPointList>
                  <SubPoint>Responsive Web design </SubPoint>
                  <SubPoint>
                    JavaScript Algorithms and data structures{" "}
                  </SubPoint>
                  <SubPoint>Front End Libraries </SubPoint>
                  <SubPoint>Data visualization </SubPoint>
                  <SubPoint>API and Microservices</SubPoint>
                </SubPointList>
                <Point>
                  FreeCodeCamp practice-first approach helped me gain a lot of
                  knowledge and confidence when writing code.{" "}
                </Point>
              </PointList>
            </TimelineContent>
          )}
        </InView>

        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <TimelineContent
              ref={ref}
              initial={variantstext.hidden}
              animate={{ opacity: inView ? 1 : 0 }}
            >
              <Date>28th November, 2019</Date>
              <Heading>React.js</Heading>
              <PointList>
                <Point>Started using React.js as my primary framework </Point>
                <Point>
                  Created a bunch of projects with React which all have repos on
                  GithHub
                </Point>
                <Point>I used a multitude of React libraries </Point>
                <Point>Used VScode as my main code-editor.</Point>
              </PointList>
            </TimelineContent>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <TimelineContent
              ref={ref}
              initial={variantstext.hidden}
              animate={{ opacity: inView ? 1 : 0 }}
            >
              <Date>Feb 13, 2021</Date>
              <Heading>Brawl Max</Heading>
              <PointList>
                <Point>
                  Developed and launched a game-companion app (Brawl Stars){" "}
                </Point>
                <Point>
                  Built during the end of universities studies. I developed the
                  app by myself.{" "}
                </Point>
                <Point>Still in open beta for the moment.</Point>
                <Point>
                  Coded for over 300 hours+. This project made me a lot more
                  confident when coding.
                </Point>
              </PointList>
            </TimelineContent>
          )}
        </InView>
      </Timeline>
    </Container>
  );
}

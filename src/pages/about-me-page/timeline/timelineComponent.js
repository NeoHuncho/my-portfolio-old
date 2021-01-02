import React from 'react';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';

import {PointList} from '../../../styling/styles'
import { mediaQueries } from '../../../styling/mediaQueries';


export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`



export const Timeline = styled.ul`
  width:90% ;
  height:auto;
  max-width:800px;
  margin: 0 auto;
  position:relative;
  list-style:none;

  //this is the line in the center of the timeline      //this is the line in the center of the timeline
 
  @media ${mediaQueries.mobile}{
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
  
  @media ${mediaQueries.nonmobile}{
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
 
`

export const Point =styled.li`
font-size: 16px;
line-height: 30px;
font-weight: 300;
@media ${mediaQueries.nonmobile}{
padding-bottom:5%;

}
`



export const TimelineContent = styled(motion.li)`
  padding:20px;
  background-color: #343434 ;
  color:white;
  border-radius:10px;
  margin-bottom:10px;
  :last-child {
  margin-bottom: 0;
}
  @media ${mediaQueries.nonmobile}{
      width:50%;
      margin-bottom:50px;
      position:relative;

   


      :nth-child(odd){
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
  
`

export const Heading = styled.h1`
font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 10px;
`



export const Date = styled(motion.h3)`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
  @media ${mediaQueries.nonmobile}{
    position: absolute;
    top: -30px;
  }
`

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
  hidden: { opacity: 0}
}
  return (
    <Container >
      <Timeline>
   
      <InView threshold={0.25}>
      {({ ref, inView,}) => ( 
      <TimelineContent  ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }} >
            
            <Date>6th april, 1999</Date>
            <Heading> Joining Earth</Heading>
    
<PointList>
<Point>Born in France to à speaking English mother and a French speaking dad </Point>
<Point>Remained in france for the remaining 18 years of my life </Point>
<Point>Went to a multi-nationality school and the school my school classes half in French and half in English</Point>
</PointList>
               
        </TimelineContent>
      )}
       
        </InView>
        <InView threshold={0.25}>
      {({ ref, inView,}) => ( 

       
     
        <TimelineContent  ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }}>
           
            <Date>1st may, 2014</Date>
            <Heading>HTML and CSS</Heading>
            <PointList>
              <Point>Started to learn  HTML and CSS at the age of 15  </Point>
              <Point>Learned through a book called get coding with multiple small projects </Point>
              <Point>Coding has always been my passion from then onward  </Point>
            </PointList>

        </TimelineContent>
        )}
        </InView>


   
        <InView threshold={0.25}>
      {({ ref, inView,}) => ( 
        <TimelineContent ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }} >
          
          <Date>1st September, 2018</Date>
          <Heading>University</Heading>
          <PointList>
              <Point>Started studying at Concordia University in Montreal Canada  </Point>
              <Point>Studied business technology management </Point>
              <Point>earned a bachelor's degree with a 3.7 gpa in business technology management major and a 3.0 GPA overall. </Point>
              <Point>Example of classes I took:</Point>
                <Point>Introduction to Business Applicant Development(C#)</Point>
                <Point>Database Management(MySql)</Point>
                <Point>Information Systems Analysis/ Design and Implementation/ Strategy, Management, and Sourcing</Point>
                <Point>The Management of Digital Privacy in Society</Point>
                <Point>E-Business</Point>
          </PointList>
        
        </TimelineContent>
   )}
   </InView>

         
      <InView threshold={0.25}>
      {({ ref, inView,}) => ( 
        <TimelineContent ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }}>
         
          <Date>28th November, 2019</Date>
          <Heading>FreeCodeCamp</Heading>
          <PointList>
              <Point>Started to use FreeCodeCamp to learn and practice the skills of full-stack dev. </Point>
              <Point>Completed the following certifications: </Point>
              <Point>Responsive Web design </Point>
              <Point>JavaScript Algorithms and data structures </Point>
              <Point>Front End Libraries  </Point>
              <Point>Data visualization  </Point>
              <Point>API and Microservices</Point>
              <Point>FreeCodeCamp practice-first approach helped me gain a lot of knowledge and confidence when writing code. </Point>
          </PointList>

        </TimelineContent>
        )}
   </InView>

   <InView threshold={0.25}>
      {({ ref, inView,}) => ( 
        <TimelineContent ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }}>
         
          <Date>28th November, 2019</Date>
          <Heading>React.js</Heading>
          <PointList>
              <Point>Started using React.js as my primary framework </Point>
              <Point>Created a bunch of projects with React which all have repos on GithHub</Point>
              <Point>I use a multitude of React libraries  </Point>
              <Point>For now, React is my favorite framework, but I am also testing other ones   </Point>
          </PointList>

        </TimelineContent>
        )}
   </InView>

      </Timeline>
    </Container>
  );
}
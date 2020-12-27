import React from 'react';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';

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

export const Text = styled.p`
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;

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
            
            <Date>10th may, 2010</Date>
            <Heading>Heading 1</Heading>
            <Text>Culpa enim deserunt sint dolore occaecat mollit laboris aliquip irure. Dolor proident qui est fugiat minim reprehenderit sit eiusmod et mollit nostrud amet. Cillum Lorem ut minim duis pariatur nulla ullamco laboris dolore dolor cupi.
                  </Text>
        </TimelineContent>
      )}
       
        </InView>
        <InView threshold={0.25}>
      {({ ref, inView,}) => ( 

       
     
        <TimelineContent  ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }}>
           
            <Date>10th may, 2010</Date>
            <Heading>Heading 2</Heading>
            <Text>Culpa enim deserunt sint dolore occaecat mollit laboris aliquip irure. Dolor proident qui est fugiat minim reprehenderit sit eiusmod et mollit nostrud amet. Cillum Lorem ut minim duis pariatur nulla ullamco laboris dolore dolor cupidatat voluptate. In exercitation cupidatat in quis tempor ut deserunt amet.
                      </Text>

        </TimelineContent>
        )}
        </InView>


   
        <InView threshold={0.25}>
      {({ ref, inView,}) => ( 
        <TimelineContent ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }} >
          
          <Date>10th may, 2010</Date>
          <Heading>Heading 3</Heading>
          <Text>Culpa enim deserunt sint dolore occaecat mollit laboris aliquip irure. Dolor proident qui est fugiat minim reprehenderit sit eiusmod et mollit nostrud amet. Cillum Lorem ut minim duis pariatur nulla ullamco laboris dolore dolor cupidatat voluptate. In exercitation cupidatat in quis tempor ut deserunt amet.
                    </Text>
        
        </TimelineContent>
   )}
   </InView>

         
      <InView threshold={0.25}>
      {({ ref, inView,}) => ( 
        <TimelineContent ref={ref} initial={variantstext.hidden}animate={{opacity: inView ? 1 : 0 }}>
         
          <Date>10th may, 2010</Date>
          <Heading>Heading 4</Heading>
          <Text>Culpa enim deserunt sint dolore occaecat mollit laboris aliquip irure. Dolor proident qui est fugiat minim reprehenderit sit eiusmod et mollit nostrud amet. Cillum Lorem ut minim duis pariatur nulla ullamco laboris dolore dolor cupidatat voluptate. In exercitation cupidatat in quis tempor ut deserunt amet.
                    </Text>

        </TimelineContent>
        )}
   </InView>

      </Timeline>
    </Container>
  );
}
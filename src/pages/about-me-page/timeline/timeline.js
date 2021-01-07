import React from 'react'
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer';

import {  SecondaryTitle, TitleSection, LineBottom, LineTop } from '../../../styling/styles';
import { mediaQueries } from '../../../styling/mediaQueries';

import TimeLineComponent from './timelineComponent';


export const FullPage= styled.div`
  display: block;
  position: relative;
  background: radial-gradient(50% 98.88% at 50% 50%, #16045E 18.23%, #0E021E 100%);
    @media ${mediaQueries.mobile}{
        height:90%
    }
 
`

function Timeline() {

    const { ref, inView } = useInView({
        threshold: 0.4
    })

    return (
        <FullPage  style={{ zIndex: 2 }} >
            <TitleSection ref={ref} initial={{opacity:0,x:-50}}
               animate={{opacity:inView?1:0,x:inView?0:-50}}
                transition={{ ease: "easeOut", duration: 1.5 }}  >
                <SecondaryTitle >
                    Timeline
                </SecondaryTitle>
                    <LineTop />
                    <LineBottom />
            </TitleSection>
       
         <TimeLineComponent />
        
        </FullPage>
    )
}

export default Timeline

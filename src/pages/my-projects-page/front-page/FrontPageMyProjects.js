import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';

import { FullPage, Title, TitleSection, LineBottom, LineTop,Scrooldown,GridHorizontal,ImageSection } from '../../../styling/styles'
import {mediaQueries} from '../../../styling/mediaQueries';

import front_page_image from './files/my_projects_front_page_image.png';
import scroolDown from '../../ScroolDown_bar.svg'

const ThisTitleSection=styled(TitleSection)`
 
 @media ${mediaQueries.mobile}{
    position:absolute;
        margin-top:15%;
        margin-bottom:10%
    }
   
    @media ${mediaQueries.ipadAndIpadPro}{
        margin-bottom:15%;
        margin-top:5%
    }
 `

const ThisImageSection = styled(ImageSection)`

@media ${mediaQueries.mobile}{
  margin-top:40%;
  margin-left:4%;

}

@media ${mediaQueries.ipadAndIpadPro}{
  margin-left:11%;
  margin-top:20%;
  }   
`

const Svg = styled(motion.img)`
 @media ${mediaQueries.mobile}{
    width: 90vw;
   
 }
 @media ${mediaQueries.ipadAndIpadPro}{
    width: 80vw;
 }

@media ${mediaQueries.desktop}{
    width: 45vw;
    margin-left: 4%;
}
 `

export default function FrontPage() {

    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <FullPage>
         
            <Scrooldown  src={scroolDown} style={{ zIndex: 1 }} />
            <GridHorizontal>
            <ThisImageSection intial={{opacity:0,x:0}} animate={{ opacity: [0,0,2] }} transition={{ times: [0,0.4,1.1], ease: "easeInOut"}}>
                
                <Svg animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }}  src={front_page_image} alt='Computer' />

            </ThisImageSection >

            <ThisTitleSection  initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <Title>MY PROJECTS</Title>
                <LineTop />
                <LineBottom />
            </ThisTitleSection>
            
            </GridHorizontal>
        </FullPage>
    )
}

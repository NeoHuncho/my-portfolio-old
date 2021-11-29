import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { FullPage, Title, FrontPageTitleSection, LineBottom, LineTop,Scrooldown,GridHorizontal,ImageSection} from '../../../../styling/styles'
import { mediaQueries} from '../../../../styling/mediaQueries'

import scroolDown from '../../../ScroolDown_bar.svg'
import computer from './files/computer-01.svg';

const SubTitle = styled.h2`

font-family: Roboto;
font-style: normal;
font-weight: 100;
color: #FFFFFF;
   
    @media ${mediaQueries.nondesktop}{
        font-size: 6vw;
        line-height: 6vw;   
    }

    @media ${mediaQueries.desktop}{
        font-size: 2.5vw;
        line-height: 3vw;
    }
 
 `

function FrontPage() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <FullPage>

            <Scrooldown src={scroolDown} style={{ zIndex: 1 }} />
        <GridHorizontal>
            <ImageSection  initial={{opacity:0,x:50,y:-50}}
               animate={{opacity:1,x:0,y:0}}
                transition={{ ease: "easeInOut", duration: 1.5 }}>

                <motion.img animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }} src={computer} alt='Computer' />

            </ImageSection>

            <FrontPageTitleSection  initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <Title >WILLIAM<br /> GUINAUDIE</Title>
                <LineTop/>
                <LineBottom/>
                <SubTitle>Full Stack Developer</SubTitle>
            </FrontPageTitleSection>
        </GridHorizontal>
        </FullPage>
    )
}

export default FrontPage



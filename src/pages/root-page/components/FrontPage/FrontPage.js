import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { FullPage, Title, TitleSection, LineBottom, LineTop,Scrooldown } from '../../../../styling/styles'

import scroolDown from '../../../ScroolDown_bar.svg'
import computer from './files/computer-01.svg';


const ThisTitleSection=styled(TitleSection)`
@media (max-width: 420px){    
    bottom: 12vh;
 }`
const Svg = styled(motion.section)`

position:relative;
 @media(max-width: 1025px){
    width: 90vw;
    bottom: 18vh;
    left:5vw;
   
 }

@media(min-width: 1025px){
    width: 45vw;
    left: 53vw;
}
 
 `

const SubTitle = styled.h2`
font-family: Roboto;
font-style: normal;
font-weight: 100;
color: #FFFFFF;
 @media(max-width: 1025px){
    font-size: 6vw;
    line-height: 6vw;   
 }

@media(min-width: 1025px){
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

            <Svg initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                <motion.img animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }} src={computer} alt='Computer' />

            </Svg>

            <ThisTitleSection  initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <Title >WILLIAM<br /> GUINAUDIE</Title>
                <LineTop/>
                <LineBottom/>
                <SubTitle>full stack<br />web developer</SubTitle>
            </ThisTitleSection>

        </FullPage>
    )
}

export default FrontPage



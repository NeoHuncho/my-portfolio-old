import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { Page, Title, TitleSection, LineBottom, LineTop } from '../../../../styles'

import scroolDown from '../../../ScroolDown_bar.svg'
import computer from './files/computer-01.svg';

const ThisPage= styled(Page)`
@media (max-width: 420px){
    height: 100vh;
}
`
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
const Scrooldown = styled.img`
 position: fixed;
 @media(max-width: 1025px){
    height: auto;
    bottom: 0vh;
    right: 3.5vw;
    width:13vw;
 }

@media(min-width: 1025px){
    height: auto;
    width: 10vh;
    bottom: 0vh;
    left: 1vw;
}
 
 `
function FrontPage() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }

    return (
        <ThisPage>

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
                <h2 className='subtitle'>full stack<br />web developer</h2>
            </ThisTitleSection>

        </ThisPage>
    )
}

export default FrontPage



import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';

import { FullPage, Title, TitleSection, LineBottom, LineTop,Scrooldown } from '../../../styling/styles'

import front_page_image from './files/1st image-min (1).png';
import scroolDown from '../../ScroolDown_bar.svg'

const ThisTitleSection=styled(TitleSection)`
@media (max-width: 1025px){    
    bottom: 20vh;
 }`

const Svg = styled(motion.img)`
position:relative;
 @media(max-width: 1025px){
    width: 100vw;
    bottom: 18vh;
    left:0vw;
   
 }

@media(min-width: 1025px){
    width: 45vw;
    left: 53vw;
}
 `

export default function frontPage() {

    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <FullPage>

            <Scrooldown  src={scroolDown} style={{ zIndex: 1 }} />
           
            <motion.div style={{ zIndex: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                
                <Svg animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }}  src={front_page_image} alt='Computer' />

            </motion.div >

            <ThisTitleSection  initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <Title>WHO AM I?</Title>
                <LineTop />
                <LineBottom />
            </ThisTitleSection>
            
          
        </FullPage>
    )
}

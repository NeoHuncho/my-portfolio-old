import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';


import '../general.css';

import front_page_image from './files/1st image-min (1).png';
import scroolDown from '../../ScroolDown_bar.svg'

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

export default function frontPage() {

    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <div className='page'>

            <Scrooldown className='scroolDown' src={scroolDown} style={{ zIndex: 1 }} />


            <motion.div className='titles' initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <h1 className='title'>WHO AM I?</h1>
                <span className='line1'></span>
                <span className='line2' ></span>
            </motion.div>
            
            <motion.div style={{ zIndex: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                
                <Svg animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }}  src={front_page_image} alt='Computer' />

            </motion.div >
        </div>
    )
}

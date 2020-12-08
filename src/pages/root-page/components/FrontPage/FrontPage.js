import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import scroolDown from '../../../ScroolDown_bar.svg'
import computer from './files/computer-01.svg';


const Svg = styled.section`

position:relative;
 @media(max-width: 420px){
    width: 250vw;
    bottom: 13vh;
   
    padding:-5vw;
    border:0;
   
 }
 @media(min-width:421px) and (max-width: 811px){
    width: 90vw;
    bottom: 18vh;
    left:5vw;
   

}
@media(min-width:811px) and (max-width: 1025px){
    width: 90vw;
    bottom: 18vh;
    left:5vw;
  
}
@media(min-width: 1025px){
    width: 45vw;
    left: 55vw;
}
 
 `
const Scrooldown = styled.img`
 position: fixed;
 @media(max-width: 420px){
    height: auto;
    bottom: 0vh;
    right: 3.5vw;
    width:13vw;
 }
 @media(min-width:421px) and (max-width: 811px){
    height: auto;
    bottom: 0vh;
    right: 3.5vw;
    width:13vw;
}
@media(min-width:811px) and (max-width: 1025px){
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
        <div className='page'>

            <Scrooldown  src={scroolDown} style={{ zIndex: 1 }} />

            <motion.div className='titles' initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <h1 className='title'>WILLIAM<br /> GUINAUDIE</h1>
                <span className='line1'></span>
                <span className='line2' ></span>
                <h2 className='subtitle'>full stack<br />web developer</h2>
            </motion.div>
            <Svg>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    
                    <motion.img animate={{ y: [0, -10, 0] }} transition={{
                        duration: 5,
                        ease: "easeInOut",
                        loop: Infinity
                    }}  src={computer} alt='Computer' />
                  
                </motion.div>
            </Svg>
           
        </div>
    )
}

export default FrontPage



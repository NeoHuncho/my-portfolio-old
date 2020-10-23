import React from 'react';
import {motion} from "framer-motion";
import './AboutMe.css';
import '../general.css';
import Button from 'react-bootstrap/Button';
import astraunaut from './files/astraunaut.svg'
function AboutMe() {
    return (
        <div className='page'>
            <div className='titles'>
    <h1 className='title'>About<br/>Me</h1>
    <span className='line1'></span>
    <span className='line2'style={{zIndex:1}}></span>
    <Button className='button' size="lg" variant="info">Learn More</Button>
             </div>   
             <div className='svgAbout'style={{zIndex:0}}>
      <motion.img
      animate={{ y: [0, -10, 0] }} transition={{
        duration: 5,
        ease: "easeInOut",
        loop: Infinity
    }} className= 'astronaut'src={astraunaut} alt='Computer' />
      </div>
        </div>
    )
}

export default AboutMe



import React from 'react';
import {motion} from "framer-motion";
import './AboutMe.css';
import '../general.css';
import Button from 'react-bootstrap/Button';
import {useInView} from 'react-intersection-observer';
import astraunaut from './files/astraunaut.svg'
function AboutMe() {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  })
    return (
        <div className='page' style={{zIndex:2}}>
            <motion.div ref={ref} className='titles' initial={{opacity:0,x:-50}}
                animate={{opacity:inView?1:0,x:inView?0:-50}} transition={{duration:1, ease: "easeOut"}}>
    <h1 className='title'>About<br/>Me</h1>
    <span className='line1'></span>
    <span className='line2'></span>
    <Button className='button' size="lg" variant="info">Show Me More</Button>
             </motion.div>   
             <motion.div initial={{opacity:0}}animate={{ opacity:inView?1:0 }} className='svgAbout'style={{zIndex:0}}>
      <motion.img
      animate={{ y: [0, -10, 0] }} transition={{
        duration: 5,
        ease: "easeInOut",
        loop: Infinity
    }} className= 'astronaut'src={astraunaut} alt='Computer' />
      </motion.div>
        </div>
    )
}

export default AboutMe



import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';


import '../general.css';

import Button from 'react-bootstrap/Button';
import { useInView } from 'react-intersection-observer';
import astraunaut from './files/astraunaut.svg';
import { Link } from 'react-router-dom';

const Svg = styled(motion.img)`

position:relative;
 @media(max-width: 1025px){
    width: 90vw;
    bottom: 20vh;
    left: 4vw;
 }
 
@media(min-width: 1025px){
    width: 35vw;
    left: 60vw;
   
}
`

function AboutMe() {
  const [ref, inView] = useInView({
    rootMargin: '50px 0px',
  })
  return (
    <div className='page' style={{ zIndex: 2 }}>
     
      <motion.div ref={ref} className='titles' initial={{ opacity: 0, x: -50 }}  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} transition={{ duration: 1, ease: "easeOut" }}>
        <Link to='about-me'><h1 to='about-me' className='title'>About<br />Me</h1></Link>
        <span className='line1'></span>
        <span className='line2'></span>
       <Button to='about-me' className='button' size="lg" variant="info">Show Me More</Button>
      </motion.div>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}style={{ zIndex: 0 }}>
        <Link to='about-me'> 
          <Svg
          animate={{ y: [0, -10, 0] }} transition={{
            duration: 5,
            ease: "easeInOut",
            loop: Infinity
          }}  src={astraunaut} alt='Computer' />
        </Link>
      </motion.div>
    </div>
  )
}

export default AboutMe



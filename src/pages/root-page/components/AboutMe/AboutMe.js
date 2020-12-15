import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import {Page, Title,TitleSection,LineBottom,LineTop} from '../../../../styles'
import '../general.css';

import Button from 'react-bootstrap/Button';
import { useInView } from 'react-intersection-observer';
import astraunaut from './files/astraunaut.svg';
import { Link } from 'react-router-dom';

const Svg = styled(motion.img)`

position:relative;
 @media(max-width: 1025px){
    width: 70vw;
    bottom: 20vh;
    left: 15vw;
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
    < Page style={{ zIndex: 2 }}>
     
    <TitleSection ref={ref} initial={{ opacity: 0, x: -50 }}  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} transition={{ duration: 1, ease: "easeOut" }}>
    <Link to='/about-me' >
      <Title > About<br />Me</Title>
    </Link>
          <LineTop />
          <LineBottom />
          <Link to='/about-me'>  <Button  className='button' size="lg" variant="info">Show Me More</Button></Link>
      </TitleSection>

     <motion.div initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}style={{ zIndex: 0 }}>
        <Link to='/about-me'> 
          <Svg
          animate={{ y: [0, -10, 0] }} transition={{
            duration: 5,
            ease: "easeInOut",
            loop: Infinity
          }}  src={astraunaut} alt='Computer' />
        </Link>
      </motion.div>

     
      
      
    </Page>
  )
}

export default AboutMe



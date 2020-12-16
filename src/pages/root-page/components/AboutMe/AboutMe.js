import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { Page, Title, TitleSection, LineBottom, LineTop,StyledLink,StyledButton } from '../../../../styles'
import '../general.css';


import { useInView } from 'react-intersection-observer';


import astraunaut from './files/astraunaut.svg';
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
    < Page style={{ zIndex: 1}}>

      <TitleSection ref={ref} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} transition={{ duration: 1, ease: "easeOut" }}>
        <StyledLink to='/about-me'>
          <Title > About<br />Me</Title>
        </StyledLink>
        <LineTop />
        <LineBottom />
        <StyledButton variant="contained"   size="large" color="primary" component={StyledLink} to="/about-me" >
                    Show me more!
        </StyledButton>
      </TitleSection>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} >
        <StyledLink to='/about-me'>
          <Svg
            animate={{ y: [0, -10, 0] }} transition={{
              duration: 5,
              ease: "easeInOut",
              loop: Infinity
            }} src={astraunaut} alt='Computer' />
        </StyledLink>
      </motion.div>




    </Page>
  )
}

export default AboutMe



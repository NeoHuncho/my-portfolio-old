import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

import { Page, Title, TitleSection, LineBottom, LineTop, StyledLink, StyledButton, ImageSection, Grid } from '../../../../styling/styles'
import { mediaQueries } from '../../../../styling/mediaQueries'


import { useInView } from 'react-intersection-observer';


import astraunaut from './files/astraunaut.svg';

const Svg = styled(motion.img)`

position:relative;
  
  @media ${mediaQueries.mobile}{
      width: 70vw;
    
  }
  @media ${mediaQueries.ipadAndIpadPro}{
      width: 70vw;
    
  }
  
  @media ${mediaQueries.desktop}{
      width: 35vw;
    
  }
`
const ThisImageSection = styled(ImageSection)`
  
  @media ${mediaQueries.desktop}{
    margin-left:10vw;
    
  }

  @media ${mediaQueries.mobile}{
    margin-left:12%;
    margin-top:15%
      
  }

  @media ${mediaQueries.ipadAndIpadPro}{
    margin-left:12%;
    margin-top:10%
      
  }
`

const ThisTitleSection= styled(TitleSection)`
    
    @media ${mediaQueries.mobile}{
        margin-top:10%;
        margin-bottom:10%
    }
   
    @media ${mediaQueries.ipadAndIpadPro}{
        margin-bottom:15%
    }
`

function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  return (
    < Page style={{ zIndex: 1 }}>
      <Grid>
       

        <ThisImageSection initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} >
          <StyledLink to='/about-me'>
            <Svg
              animate={{ y: [0, -10, 0] }} transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity
              }} src={astraunaut} alt='Computer' />
          </StyledLink>

        </ThisImageSection>

        <ThisTitleSection ref={ref} initial={{ opacity: 0, x: -50 }} animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} transition={{ duration: 1, ease: "easeOut" }}>
          <StyledLink to='/about-me'>
            <Title > About<br />Me</Title>
          </StyledLink>
          <LineTop />
          <LineBottom />
          <StyledButton variant="contained" size="large" color="primary" component={StyledLink} to="/about-me" >
            Show me more!
        </StyledButton>
        </ThisTitleSection>

      </Grid>



    </Page>
  )
}

export default AboutMe



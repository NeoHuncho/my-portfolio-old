import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import reactlogo from './LogoFinal/react.webp';
import redux from './LogoFinal/redux.webp';
import gatsby from './LogoFinal/gatsby.webp';
import next from './LogoFinal/next.webp';
import d3 from './LogoFinal/d3.webp';
import framer_motion from './LogoFinal/framerMotion.webp';
import styled_components from './LogoFinal/styledComponents.webp';



import { mediaQueries } from '../../../../../styling/mediaQueries';


const Image = styled(motion.img)`
  max-width:50%;
 
`
const Grid = styled(motion.div)`
@media ${mediaQueries.nonmobile}{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "react redux gatsby next d3 framermotion styledcomponents";
    justify-items: center;

}
`



function FrontEndTab() {
    return (
        <Grid  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.3, ease: "easeOut" }}>
           <Image src={reactlogo}  style={{gridArea:'react'}} />
           <Image src={redux}  style={{gridArea:'redux'}}/>
           <Image src={gatsby} style={{gridArea:'gatsby'}}/>
           <Image src={next} style={{gridArea:'next'}}/>
           <Image src={d3} style={{gridArea:'d3'}}/>
           <Image src={framer_motion} style={{gridArea:'framermotion'}}/>
           <Image src={styled_components} style={{gridArea:'styledcomponents'}}/>
        </Grid>
    )
}

export default FrontEndTab;


import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import afterEffects from './LogoFinal/aftereffects-01.webp';
import figma from './LogoFinal/figma-01.webp';
import illustrator from './LogoFinal/illustrator-01.webp';
import premiere from './LogoFinal/premiere-01.webp';




import { mediaQueries } from '../../../../../styling/mediaQueries';


const Image = styled(motion.img)`
  max-width:35%;
  @media ${mediaQueries.mobile}{
    max-width:14vh;
    padding-top:8vh;
      
    :nth-child(odd){
        float:left;}
    
    :nth-child(even){
        float: right;
        }
  }
 
`
const Grid = styled(motion.div)`
@media ${mediaQueries.nonmobile}{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "afterEffects illustrator premiere figma";
    justify-items: center;

}
`

function StorageDeploymentTab() {
    return (
        <Grid  intial={{opacity:0}} animate={{ opacity: [0,0,2] }} transition={{ times:[0,0.5,1.2], ease: "easeInOut" }}>
           <Image src={afterEffects}  style={{gridArea:'afterEffects'}} />
           <Image src={illustrator}  style={{gridArea:'illustrator'}}/>
           <Image src={premiere} style={{gridArea:'premiere'}}/>
           <Image src={figma} style={{gridArea:'figma'}}/>
        </Grid>
    )
}

export default StorageDeploymentTab;


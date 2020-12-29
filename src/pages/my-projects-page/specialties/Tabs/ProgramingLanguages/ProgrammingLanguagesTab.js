import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import js from './logos/js1.webp';
import cSharp from './logos/cSharp1.webp';
import ts from './logos/ts1.webp'
import { mediaQueries } from '../../../../../styling/mediaQueries';


const Image = styled(motion.img)`
  max-width:25%;
 
`
const Grid = styled(motion.div)`
@media ${mediaQueries.nonmobile}{
display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "js ts cSharp";
    justify-items: center;

}
`



function ProgrammingLanguagesTab() {
    return (
        <Grid  intial={{opacity:0}} animate={{ opacity: [0,0,2] }} transition={{ times: [0,0.4,1.3], ease: "easeInOut" }}>
           <Image src={js}  style={{gridArea:'js'}} />
           <Image src={ts}  style={{gridArea:'ts'}}/>
           <Image src={cSharp} style={{gridArea:'cSharp'}}/>
        </Grid>
    )
}

export default ProgrammingLanguagesTab;

//style={{ zIndex: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
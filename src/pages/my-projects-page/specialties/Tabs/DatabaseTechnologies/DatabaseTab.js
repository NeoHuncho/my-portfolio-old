import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import firebase from './LogoFinal/firebase-01.webp';
import mongodb from './LogoFinal/mongodb-01.webp';
import mysql from './LogoFinal/Mysql-01.webp';





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
    "mysql mongodb firebase";
    justify-items: center;

}
`



function BackEndTab() {
    return (
        <Grid  intial={{opacity:0}} animate={{ opacity: [0,0,2] }} transition={{ times: [0,0.3,1.1], ease: "easeInOut" }}>
           <Image src={mysql}  style={{gridArea:'mysql'}} />
           <Image src={mongodb}  style={{gridArea:'mongodb'}}/>
           <Image src={firebase} style={{gridArea:'firebase'}}/>
           
        </Grid>
    )
}

export default BackEndTab;


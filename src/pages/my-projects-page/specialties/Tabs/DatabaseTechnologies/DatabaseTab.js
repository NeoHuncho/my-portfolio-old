import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import firebase from './LogoFinal/firebase-01.png';
import mongodb from './LogoFinal/mongodb-01.png';
import mysql from './LogoFinal/Mysql-01.png';





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
        <Grid  initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
           <Image src={mysql}  style={{gridArea:'mysql'}} />
           <Image src={mongodb}  style={{gridArea:'mongodb'}}/>
           <Image src={firebase} style={{gridArea:'firebase'}}/>
           
        </Grid>
    )
}

export default BackEndTab;


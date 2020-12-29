import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

import node from './LogoFinal/node-01.webp';
import express from './LogoFinal/express-01.webp';
import koa from './LogoFinal/koa-01.webp';
import socket from './LogoFinal/socket-01.webp';




import { mediaQueries } from '../../../../../styling/mediaQueries';


const Image = styled(motion.img)`
  max-width:60%;
 
`
const Grid = styled(motion.div)`
@media ${mediaQueries.nonmobile}{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "node express koa socket";
    justify-items: center;

}
`



function BackEndTab() {
    return (
        <Grid  intial={{opacity:0}} animate={{ opacity: [0,0,2] }} transition={{ times: [0,0.4,1.1], ease: "easeInOut" }}>
           <Image src={node}  style={{gridArea:'node'}} />
           <Image src={express}  style={{gridArea:'express'}}/>
           <Image src={koa} style={{gridArea:'koa'}}/>
           <Image src={socket} style={{gridArea:'socket'}}/>
        </Grid>
    )
}

export default BackEndTab;


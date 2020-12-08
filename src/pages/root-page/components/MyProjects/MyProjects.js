import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import './MyProjects.css'

import computer from './files/final art 2-min.png';
import Button from 'react-bootstrap/Button';
import '../general.css';

const Svg = styled.section`
height: auto;
position:relative;
 @media(max-width: 420px){
    width: 120vw;
    bottom: 13vh;
    right: 10vw;
 }
 @media(min-width:421px) and (max-width: 811px){
    width: 120vw;
    bottom: 13vh;
    right: 10vw;

}
@media(min-width:811px) and (max-width: 1025px){
    width: 120vw;
    bottom: 13vh;
    right: 8vw;
}
@media(min-width: 1025px){
    width: 50vw;
    left: 52vw;
    width: 12vw;
}
`

export default function MyProjects() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
    })

    return (
        <div className='page' style={{ zIndex: 2 }}>

            <motion.div ref={ref} className='titles' initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} transition={{ duration: 1, ease: "easeOut" }}
                variants={variantstext}>
                <h1 className='title'>My<br /> Projects</h1>
                <span className='line1'></span>
                <span className='line2' ></span>
                <span></span>
                <Button className='button' size="lg" variant="info">Show Me More</Button>
            </motion.div>
            
            <Svg>
                <motion.img
                    initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} src={computer} alt='Computer' />
            </Svg>

        </div>
    )
}

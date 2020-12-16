import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Page, Title, TitleSection, LineBottom, LineTop,StyledLink,StyledButton } from '../../../../styles'

import computer from './files/final art 2-min.png';
import '../general.css';

const Svg = styled(motion.img)`

position:relative;
 @media(max-width: 1025px){
    width: 90vw;
    bottom: 20vh;
    left: 4vw;
 }
 
@media(min-width: 1025px){
    width: 45vw;
    left: 52vw;
   
}
`

export default function MyProjects() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    const [ref, inView] = useInView({

        rootMargin: '50px 0px',
    })

    return (
        <Page className='page' style={{ zIndex: 2 }}>
            <StyledLink to='/my-projects'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} >
                    <Svg animate={{ y: [0, -10, 0] }} transition={{
                        duration: 5,
                        ease: "easeInOut",
                        loop: Infinity
                    }} src={computer} alt='Computer' />
                </motion.div>
            </StyledLink>
            <TitleSection ref={ref} initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} transition={{ duration: 1, ease: "easeOut" }}
                variants={variantstext}>
                <StyledLink to='/my-projects' >
                    <Title >My<br /> Projects</Title>
                </StyledLink>
                <LineTop style={{ marginTop: '4vh' }} />
                <LineBottom />
                <StyledButton variant="contained"   size="large" color="primary" component={StyledLink} to="/my-projects" >
                    Show me more!
        </StyledButton>
            </TitleSection>


        </Page>
    )
}

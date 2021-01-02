import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Page, Title, TitleSection, LineBottom, LineTop,StyledLink,StyledButton,ImageSection,GridHorizontal } from '../../../../styling/styles'
import { mediaQueries } from '../../../../styling/mediaQueries';


import computer from './files/final art 2-min.png';


const Svg = styled(motion.img)`

position:relative;

    @media ${mediaQueries.mobile}{
        width: 90vw;
    
    }
    @media ${mediaQueries.ipadAndIpadPro}{
        width: 90vw;

    }
    
    @media ${mediaQueries.desktop}{
        width: 45vw;
    
    }
`

const ThisImageSection= styled(ImageSection)`
    
    @media ${mediaQueries.nondesktop}{
        margin-left:2.5%;
        margin-top:15%;
    }

`

const ThisTitleSection= styled(TitleSection)`
    
    @media ${mediaQueries.nondesktop}{
        margin-top:10%;
        margin-bottom:10%
    }

`

export default function MyProjects() {

    const { ref, inView } = useInView({
        threshold: 0.6 ,
    })

    return (
        <Page  style={{ zIndex: 2 }}>
             <GridHorizontal>
            <StyledLink to='/my-projects'>
                <ThisImageSection  ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}  >
                    <Svg animate={{ y: [0, -10, 0] }} transition={{
                        duration: 5,
                        ease: "easeInOut",
                        loop: Infinity
                    }} src={computer} alt='Computer' />
                </ThisImageSection>
            </StyledLink>
            <ThisTitleSection  initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} transition={{ duration: 1, ease: "easeOut" }}>
                <StyledLink to='/my-projects' >
                    <Title >My<br /> Projects</Title>
                </StyledLink>
                <LineTop style={{ marginTop: '4vh' }} />
                <LineBottom />
                <StyledButton variant="contained"   size="large" color="primary" component={StyledLink} to="/my-projects" >
                    Show me more!
        </StyledButton>
            </ThisTitleSection>

            </GridHorizontal>
        </Page>
    )
}

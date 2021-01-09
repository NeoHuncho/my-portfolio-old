import Card from '@material-ui/core/Card';
import { motion } from "framer-motion";
import styled from 'styled-components'
import { mediaQueries } from '../../../../styling/mediaQueries';

export const ProjectPage= styled.div`
@media ${mediaQueries.desktop}{
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0% 0px;
  grid-template-areas:
    ". .";
    justify-items: center;
}
`

export const Colors = {
    background: '#424242',
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
  }

export const ProjectCard = styled(Card)`
    max-width:445px;
    max-height:360px;
        :nth-child(n+3) {
        margin-top:5%;   
        }
    `



export const TechnologiesSection = styled(motion.div)`
    display: flex;
    position: relative;
    `

export const Technology =  styled.img`
    padding-top:2vh;
    max-width:3.5vh;
    max-height:auto;
    :nth-child(n+2) {
        margin-left:8%;   
        }
    
    `

export const GLink = styled.a`
    display: flex;
    position: relative;
    `

export const Github= styled.img`
    max-width:6%;
    margin-left: auto; 
    margin-right: 1%;

    `
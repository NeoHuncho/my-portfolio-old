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
    max-width:60vh;
    max-height:320px;
        :nth-child(n+3) {
        margin-top:5%;   
        }
    `



export const TechnologiesSection = styled(motion.div)`
    padding-top:3%;
    display: grid;
    grid-template-columns: 90% 10%;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "tech github";
    `

export const Technology =  styled.img`
    grid-area: tech;
    max-width:7%;
    max-height:auto;
    :nth-child(2) {
        margin-left: 14%;   
        }
        :nth-child(3) {
        margin-left: 28%;   
        }
        :nth-child(4) {
        margin-left: 42%;   
        }
        :nth-child(5) {
        margin-left: 56%;   
        }
        :nth-child(6) {
        margin-left: 70%;   
        }
    
    `

export const GLink = styled.a`
   grid-area: github;
    `

export const Github= styled.img`
    max-width:70%;
    `
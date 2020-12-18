import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';

import { FullPage, Title, TitleSection,  } from '../../../styling/styles'


import second_page_image from './second page image-01-min.png';
import {useInView} from 'react-intersection-observer';
import { mediaQueries } from '../../../styling/mediaQueries';

const Svg = styled(motion.img)`
position:absolute;
 @media ${mediaQueries.nondesktop}{
    width: 50vw;
    top: 5vh;
    left:25vw;
   
 }

@media ${mediaQueries.desktop}{
    width: 35vw;
    left: 5vw;
}
 `
const ThisTitleSection= styled(TitleSection)`

@media ${mediaQueries.nondesktop} {
right:3vw;
top:1vh
}

@media ${mediaQueries.desktop} {
        right:3vw;
        left:45vw;
         top:10vh
    }
`

const ThisTitle= styled(Title)`

@media ${mediaQueries.desktop}{
    font-size:5vw;
}

@media ${mediaQueries.nondesktop}{
    font-size:7vw;
}
`
const Paragraph =styled.p`
   position:absolute;
   font-family: Roboto;
   font-weight: 300;
   color: #FFFFFF;
   font-style: normal;
    
    @media ${mediaQueries.nondesktop}{
    line-height: 2.5vh;
    bottom:1vh;
    font-size: 2vh;
    }   

    @media ${mediaQueries.desktop}{
   line-height: 3.8vh;
   font-size: 2.2vh;
   
   }
`
export default function CodingEducation() {
   
    const { ref, inView } = useInView({
        threshold: 0.5,
    })
 
    return (
        <FullPage style={{ zIndex: 1 }}>
            <ThisTitleSection  ref={ref} initial={{opacity:0,x:-50}}
               animate={{opacity:inView?1:0,x:inView?0:-50}}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <ThisTitle>Coding and Education.</ThisTitle>
                
            </ThisTitleSection>
            <motion.div  style={{ zIndex: 0 }} initial={{ opacity: 0 }}  transition={{ ease: "easeOut", duration: 1.25 }}animate={{ opacity:inView?1:0 }}>
                <Svg animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }}  src={second_page_image} alt='Computer' />
            </motion.div>
            <Paragraph>I love to code. It all started when I was 12 y/o and my parents bought me a book called ‘Learn to Code’. While this book only covered the basics of HTML and CSS,  I knew from then on that technology would be a driving force in my life. <br /> <br />

                I’m addicted to the expansiveness of the subject and the fact that there is always more to see and new things to learn/use. What kick-started my learning was FreeCodeCamp. I would also say that the 100s of YouTube tutorials that I watched throughout the years have also been enlightening and helped me grow as a person. I think the realization of my addiction to writing code came to me when I realized that even in my dreams, I was thinking of code..! <br /> <br />

                In terms of education, I spent my first 18 years of my life in a multilingual school, called Lycee International, located next to Paris, France. From there, I enrolled in a business undergraduate degree, at the University of Concordia, Montreal, Canada. My major is Business Technology Management. Although it helped me grow as a person, it paradoxically also help me understand what I wanted to do later in life: I didn’t want to manage people or technology projects, but rather build software and collaborate with people. I felt like what we were learning was theoretical and stuck in the past, when I am interested in concrete and the cutting edge! <br /> <br />
            </Paragraph>
        </FullPage>
    )
}

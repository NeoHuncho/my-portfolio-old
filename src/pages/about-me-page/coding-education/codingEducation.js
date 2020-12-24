import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';

import { FullPage, Title, TitleSection} from '../../../styling/styles'


import second_page_image from './second page image-01-min.png';
import {useInView} from 'react-intersection-observer';
import { mediaQueries } from '../../../styling/mediaQueries';

const ThisPage= styled(FullPage)`

@media ${mediaQueries.mobile}{
    height: 156vh;
    overflow:scroll;
}

@media ${mediaQueries.ipadAndIpadPro}{
    height: 125vh;
    width:100%
}
`

const Grid = styled.div`
@media ${mediaQueries.desktop}{
display: grid;
grid-template-columns: 100%;
grid-template-rows: 15% 85%;
gap: 0px 0px;
grid-template-areas:
    "title"
    "content";
}
`

const InnerGrid= styled.div`
@media ${mediaQueries.desktop}{
display: grid;
grid-template-columns: 40% 60%;
grid-template-rows: 100%;
gap: 0px 0px;
grid-template-areas:
  "image paragraph";
grid-area: content;}

`

const ThisTitleSection= styled(TitleSection)`

@media ${mediaQueries.nondesktop} {
    width:100%;


}
@media ${mediaQueries.mobile} {
  margin-left:4vw;

}

@media ${mediaQueries.ipadAndIpadPro} {
margin-left: 4vw;

}

@media ${mediaQueries.desktop} {
    grid-area: title;
    }
`

const ThisTitle= styled(Title)`

@media ${mediaQueries.nondesktop}{
    font-size:7vw;
}

@media ${mediaQueries.desktop}{
    font-size:5vw;
}
`

const ImageSection = styled.div`
@media ${mediaQueries.desktop}{
    grid-area: image;
    margin-left:1vw;
}
@media ${mediaQueries.nondesktop}{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
`


const Svg = styled(motion.img)`
 
 @media ${mediaQueries.nondesktop}{
    width: 50vw;
 }

@media ${mediaQueries.desktop}{
    width: 65vh;
  
    
}
 `



const Paragraph =styled.p`
   
   font-family: Roboto;
   font-weight: 300;
   color: #FFFFFF;
   font-style: normal;
   text-align: justify;
   grid-area:paragraph;
    
   @media ${mediaQueries.mobile}{
    line-height: 3.5vh;
 margin-left:4vh;
 margin-right:4vh;
    font-size: 2vh;
  
    }   
    @media ${mediaQueries.ipadAndIpadPro}{
    line-height: 3.2vh;
    bottom:1vh;
    font-size: 2vh;
    padding-left:4vw;
    padding-right:4vw;
    }   

    @media ${mediaQueries.desktop}{
   grid-area:paragraph;
   line-height: 3.8vh;
   font-size: 1.2vw;   
   height:75%;
   margin-right:10%;
   margin-top : 5%;
   }
`

export default function CodingEducation() {
   
    const { ref, inView } = useInView({
        threshold: 0.5,
    })
 
    return (
      
        <ThisPage style={{ zIndex: 1 }}>
              <Grid>
            <ThisTitleSection ref={ref} initial={{opacity:0,x:-50}}
               animate={{opacity:inView?1:0,x:inView?0:-50}}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <ThisTitle>Coding and Education.</ThisTitle>
                
            </ThisTitleSection>
            
            <InnerGrid>
            <ImageSection  style={{ zIndex: 0 }} initial={{ opacity: 0 }}  transition={{ ease: "easeOut", duration: 1.25 }}animate={{ opacity:inView?1:0 }}>
                <Svg animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }}  src={second_page_image} alt='Computer' />
            </ImageSection>
            <Paragraph>I love to code. It all started when I was 12 y/o and my parents bought me a book called ‘Learn to Code’. While this book only covered the basics of HTML and CSS,  I knew from then on that technology would be a driving force in my life. <br /> <br />

                I’m addicted to the expansiveness of the subject and the fact that there is always more to see and new things to learn/use. What kick-started my learning was FreeCodeCamp. I would also say that the 100s of YouTube tutorials that I watched throughout the years have also been enlightening and helped me grow as a person. I think the realization of my addiction to writing code came to me when I realized that even in my dreams, I was thinking of code..! <br /> <br />

                In terms of education, I spent my first 18 years of my life in a multilingual school, called Lycee International, located next to Paris, France. From there, I enrolled in a business undergraduate degree, at the University of Concordia, Montreal, Canada. My major is Business Technology Management. Although it helped me grow as a person, it paradoxically also help me understand what I wanted to do later in life: I didn’t want to manage people or technology projects, but rather build software and collaborate with people. I felt like what we were learning was theoretical and stuck in the past, when I am interested in concrete and the cutting edge!
            </Paragraph>
            </InnerGrid>
            </Grid>
        </ThisPage>
    )
}

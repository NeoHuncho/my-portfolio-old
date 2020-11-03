import React from 'react'
import { motion } from "framer-motion";
import '../general.css';
import {useInView} from 'react-intersection-observer';
import './whatIKnow.css';
import frame from './frames_for_logos.png'
export default function CodingEducation() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
      })
 
    return (
        <div className='page'  style={{ zIndex: 1 }}>
            <motion.div ref={ref}className='titlesWH' initial={{opacity:0,x:-50}}
               animate={{opacity:inView?1:0,x:inView?0:-50}}
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <h1 className='titleWH'>What I Know.</h1>

            </motion.div>
            <motion.div className='svgFrontWH' style={{ zIndex: 0 }} initial={{ opacity: 0 }}  transition={{ ease: "easeOut", duration: 1.25 }}animate={{ opacity:inView?1:0 }}>
                <img  className='computerFrontWH' src ={frame}alt='Computer' />
            </motion.div>
        </div>
    )
}

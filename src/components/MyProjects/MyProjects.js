import React from 'react';
import {motion} from "framer-motion";
import './MyProjects.css'
import computer from './files/final art 2.svg';
import Button from 'react-bootstrap/Button';
import '../general.css';
import {useInView} from 'react-intersection-observer';


export default function MyProjects() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
      })
 
    return (
        <div className='page'>
           
            <motion.div ref={ref} className='titles' initial={{opacity:0,x:-50}}
                animate={{opacity:inView?1:0,x:inView?0:-50}}
                variants={variantstext}>
    <h1 className='title'>My<br/> Projects</h1>
    <span className='line1'></span>
    <span className='line2' ></span>
    <span></span>
    <Button className='button' size="lg" variant="info">Learn More</Button>
             </motion.div>   
             <div className='svgProject'>
             <motion.img
             initial={{opacity:0}}animate={{ opacity:inView?1:0 }} className= 'computerProject'src={computer} alt='Computer' />
             
      </div>
        
        </div>
    )
}

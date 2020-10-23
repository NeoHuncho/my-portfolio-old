import React from 'react';
import {motion} from "framer-motion";
import './MyProjects.css'
import computer from './files/final art.svg';
import Button from 'react-bootstrap/Button';
import '../general.css';
export default function MyProjects() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <div className='page'>
           
            <motion.div className='titles' initial="hidden"
                animate="visible"
                variants={variantstext}>
    <h1 className='title'>My<br/> Projects</h1>
    <span className='line1'></span>
    <span className='line2' ></span>
    <span></span>
    <Button className='button' size="lg" variant="info">Learn More</Button>
             </motion.div>   
             <div className='svgProject'>
             <img
             animate={{ y: [0, -10, 0] }} transition={{
                duration: 5,
                ease: "easeInOut",
                loop: Infinity
            }} className= 'computerProject'src={computer} alt='Computer' />
             
      </div>
        
        </div>
    )
}

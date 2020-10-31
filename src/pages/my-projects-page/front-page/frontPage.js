import React from 'react';
import {motion} from "framer-motion";
import './frontPage.css';
export default function frontPage() {
  
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
                    <div className='page'>
            <div>
                <p className='scroolDown'>SCROLLDOWN</p>
                <span className='lineSD'></span>
            </div>
            <div>
             
            </div>
            <motion.div className='titles' initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <h1 className='title'>WILLIAM<br /> GUINAUDIE</h1>
                <span className='line1'></span>
                <span className='line2' style={{ zIndex: 1 }}></span>
                <h2 className='subtitle'>full stack<br />web developer</h2>
            </motion.div>
        </div>
    )
}

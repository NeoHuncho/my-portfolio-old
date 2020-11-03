import React from 'react'
import { motion } from "framer-motion";
import './frontPage.css';
import '../general.css';
import front_page_image from './front_page_image.png';
import scroolDown from '../../ScroolDown_bar.svg'
export default function frontPage() {

    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <div className='page'>

            <motion.img className='scroolDown' src={scroolDown} style={{ zIndex: 1 }} />


            <motion.div className='titles' initial="hidden"
                animate="visible"
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <h1 className='title'>WHO AM I?</h1>
                <span className='line1'></span>
                <span className='line2' ></span>
            </motion.div>
            <motion.div className='svgFront' style={{ zIndex: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <motion.img animate={{ y: [0, -10, 0] }} transition={{
                    duration: 5,
                    ease: "easeInOut",
                    loop: Infinity
                }} className='computerFront' src={front_page_image} alt='Computer' />
            </motion.div>
        </div>
    )
}

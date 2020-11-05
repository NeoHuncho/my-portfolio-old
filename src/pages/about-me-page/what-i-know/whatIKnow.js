import React from 'react'
import { motion } from "framer-motion";
import '../general.css';
import { useInView } from 'react-intersection-observer';
import './whatIKnow.css';
import frame from './frames_for_logos.png';

import england from './flags/england.png';
import france from './flags/france.png';

import react from './front-end/react-01.png';
import redux from './front-end/redux-01.png';
import vue from './front-end/vue-01.png';
import npm from './front-end/npm-01.png';
import d3 from './front-end/d3.png';
import sass from './front-end/sass-01.png';
import motion_framer from './front-end/motion_framer.png';
import jquery from './front-end/jquery-01.png';
import chrome from './front-end/chrome-01.png';

import mongoose from './back-end/mongoose.png';
import express from './back-end/express.png';
import mongodb from './back-end/mongodb.png';
import node from './back-end/node.png';

import ae from './other-skills/ae-01.png';
import figma from './other-skills/figma-01.png';



export default function CodingEducation() {
    const variantstext = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
    })

    return (
        <div className='page' style={{ zIndex: 1 }}>
            <motion.div ref={ref} className='titlesWH' initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                variants={variantstext}
                transition={{ ease: "easeOut", duration: 1.5 }}>
                <h1 className='titleWH'>What I Know.</h1>

            </motion.div>
            <motion.div className='svgFrontWH' style={{ zIndex: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 1.25 }} animate={{ opacity: inView ? 1 : 0 }}>
                <img className='computerFrontWH' src={frame} alt='Computer' />
                <h2 className='category_title' style={{ top: "12vh", left: "6vh" }}>Languages I know:</h2><img className="logos" src={england} style={{ top: "12vh", left: "50vh" }} /> <img className="logos" src={france} style={{ top: "12vh", left: "60vh" }} />
                <h2 className='category_title' style={{ top: "25vh", left: "6vh" }}>Front-End Technologies I use: </h2> <img className="logos" src={react} style={{ top: "24.5vh", left: "65vh" }} /> <img className="logos" src={redux} style={{ top: "24.5vh", left: "75vh" }} />
                    <img className="logos" src={vue} style={{ top: "24.5vh", left: "85vh" }} />
                    <img className="logos" src={npm} style={{ top: "26.5vh", left: "95vh" }} />
                    <img className="logos" src={d3} style={{ top: "24.5vh", left: "105vh" }} />
                    <img className="logos" src={sass} style={{ top: "24.5vh", left: "115vh" }} />
                    <img className="logos" src={motion_framer} style={{ top: "24.5vh", left: "125vh" }} />
                    <img className="logos" src={jquery} style={{ top: "24.5vh", left: "135vh" }} />
                    <img className="logos" src={chrome} style={{ top: "24.5vh", left: "145vh" }} />
                <h2 className='category_title' style={{ top: "40vh", left: "6vh" }}>Back-End Technologies I use: </h2>
                
                <h2 className='category_title' style={{ top: "55vh", left: "6vh" }}>Other notable skills: </h2><br />
            </motion.div>
        </div>
    )
}

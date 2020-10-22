import React from 'react';
import './AboutMe.css';
import '../general.css';
import Button from 'react-bootstrap/Button';
import astraunaut from './files/astraunaut.svg'
function AboutMe() {
    return (
        <div className='page'>
            <div className='titles'>
    <h1 className='title'>About<br/>Me</h1>
    <span className='line1'></span>
    <span className='line2'style={{zIndex:1}}></span>
    <Button className='button' size="lg" variant="info">Learn More</Button>
             </div>   
             <div className='svgAbout'style={{zIndex:0}}>
      <img className= 'astronaut'src={astraunaut} alt='Computer' />
      </div>
        </div>
    )
}

export default AboutMe



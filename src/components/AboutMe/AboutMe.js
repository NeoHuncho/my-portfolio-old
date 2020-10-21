import React from 'react';
import './AboutMe.css';
import Button from 'react-bootstrap/Button';
import astraunaut from './files/astraunaut.svg'
function AboutMe() {
    return (
        <div id='front-page'>
            <div className='titles'>
    <h1 className='title'>About<br/>Me</h1>
    <span className='line1'></span>
    <span className='line2'style={{zIndex:1}}></span>
    <Button className='button' size="lg" variant="info">Learn More</Button>
             </div>   
             <div className='astraunaut'style={{zIndex:0}}>
      <img className= 'image'src={astraunaut} alt='Computer' />
      </div>
        </div>
    )
}

export default AboutMe



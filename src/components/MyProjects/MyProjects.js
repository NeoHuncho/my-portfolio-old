import React from 'react'
import './MyProjects.css'
import computer from './files/final art.svg';
import Button from 'react-bootstrap/Button';
import '../general.css';
export default function MyProjects() {
    return (
        <div className='page'>
           
            <div className='titles'>
    <h1 className='title'>My<br/> Projects</h1>
    <span className='line1'></span>
    <span className='line2' ></span>
    <span></span>
    <Button className='button' size="lg" variant="info">Learn More</Button>
             </div>   
             <div className='svgProject'>
             <img className= 'computerProject'src={computer} alt='Computer' />
             
      </div>
        
        </div>
    )
}

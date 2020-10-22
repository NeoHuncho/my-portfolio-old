import React from 'react';
import './FrontPage.css';
import '../general.css';
import computer from './files/computer-01.svg'
function FrontPage() {
    return (
        <div className='page'>
            <div>
            <p className='scroolDown'>SCROLLDOWN</p>
            <span className='lineSD'></span>
            </div>
            <div>
                <span className='page1'></span>
                <span className='page2'></span>
                <span className='page3'></span>
            </div>
            <div className='titles'>
    <h1 className='title'>WILLIAM<br/> GUINAUDIE</h1>
    <span className='line1'></span>
    <span className='line2'style={{zIndex:1}}></span>
    <h2 className='subtitle'>full stack<br/>web developer</h2>
             </div>   
             <div className='svgFront'style={{zIndex:0}}>
      <img className= 'computerFront'src={computer} alt='Computer' />
      </div>
        </div>
    )
}

export default FrontPage



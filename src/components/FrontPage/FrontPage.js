import React from 'react';
import './FrontPage.css';
import computer from './files/computer-01.svg'
function FrontPage() {
    return (
        <div id='front-page'>
            <div className='titles'>
    <h1 className='title'>WILLIAM<br/> GUINAUDIE</h1>
    <span></span>
    <span></span>
    <h2 className='subtitle'>full stack<br/>web developer</h2>
             </div>   
             <div className='computer'>
      <img className= 'image'src={computer} alt='Computer' />
      </div>
        </div>
    )
}

export default FrontPage



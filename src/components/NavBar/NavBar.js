import React from 'react'
import './NavBar.css';
import fcc from './Files/fcc.png';
import github from './Files/github white.svg';
import hamburger from './Files/hamburger.svg'
export default function NavBar() {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>W.G</div>
            <div className='navbar__item '>
           
                <img className='github' src={github} alt='Free Code Camp link'/>
            </div>
            <div className='navbar__item '>
            <img className='fcc' src={fcc} alt='Free Code Camp link'/>
            </div>
            <div className='navbar__item '>
            <img className='hamburger computer-hide' src={hamburger} alt='menu'/>
            </div>
            <div className='navbar__item mobile-hide'>My Projects</div>
            <div className='navbar__item mobile-hide'>About Me</div>
        </header>
    )
}

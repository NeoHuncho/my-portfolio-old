import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from '../../styling/mediaQueries';

import fcc from './Files/fcc.png';
import github from './Files/github white.svg';
import hamburger from './Files/hamburger.svg';

import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const Navbar = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
display: flex;
align-items: center;
color: white;
font-family: Roboto;
font-weight: 500;
z-index: 3; 
   
`
export const StyledLink = styled(Link)`
  
text-decoration: 'none';
color: 'white' !important;

&:hover{
text-decoration: none
};
`


export const NavBarItem = styled.div`
 color: white !important;
    @media ${mediaQueries.mobile}{
        margin-right: auto;
        font-size: 5vw;
    }

    @media ${mediaQueries.ipad}{
        margin-right: auto;
        font-size: 150%;
        padding: 12px 16px;
    }

    @media ${mediaQueries.ipadPro}{
        padding: 16px 16px;
        font-size: 225%;
        vertical-align: middle;
    }

    @media ${mediaQueries.desktop}{
        padding: 16px 16px;
        cursor: pointer;
        font-size: 125%;
        vertical-align: middle;
    }
`
export const TitleItem = styled(NavBarItem)`
text-decoration: 'none';
color: 'white';

    @media ${mediaQueries.ipadPro}{
        margin-right: auto;
        font-size: 200%;
        padding: 12px 16px;
    }

    @media ${mediaQueries.desktop}{
        margin-right: auto;
        font-size: 150%;
        padding: 12px 16px;
    }

 `

export const NotMobileLink = styled(NavBarItem)`
 text-decoration: 'none';
 color: 'white'; 

 @media ${mediaQueries.mobile}{
        display: none;
    }
`
export const FCC = styled.img`
height: auto;
    @media ${mediaQueries.mobile}{
       width: 8vw;
    }

    @media ${mediaQueries.ipad}{
        
       width: 5.5vw;
    }

    @media ${mediaQueries.ipadPro}{
       width: 5vw;
    }

    @media ${mediaQueries.desktop}{
       width: 2.5vw;
    }
`

export const Github = styled.img`
height: auto;
    @media ${mediaQueries.mobile}{
        width: 8vw;
    }

    @media ${mediaQueries.ipad}{
        
        width: 4vw;
    }

    @media ${mediaQueries.ipadPro}{
        width: 3.5vw;
    }

    @media ${mediaQueries.desktop}{
        width: 2vw;
    }
`

export const HamburgerMobile = styled.img`
    @media ${mediaQueries.mobile}{
        width: 6vw;
        margin-left: 5vw;
    }

    @media ${mediaQueries.desktop}{
        display:none;
    }

    @media ${mediaQueries.ipadAndIpadPro}{
        display:none;
    }

`

export const ThisMenu = styled(Menu)`
    @media ${mediaQueries.desktop}{
        display:none;
    }

    @media ${mediaQueries.ipadAndIpadPro}{
        display:none;
    }
`

export const ThisMenuItem = styled(MenuItem)`
   color: black !important;
    @media ${mediaQueries.desktop}{
        display:none;
    }

    @media ${mediaQueries.ipadAndIpadPro}{
        display:none;
    }
`

export default function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Navbar>
            <StyledLink to="/">
                <TitleItem >W.G</TitleItem>
            </StyledLink>
            <NavBarItem>
                <Link to='https://github.com/NeoHuncho' rel="noopener noreferrer" target="_blank">
                    <Github src={github} alt='Free Code Camp link' />
                </Link>
            </NavBarItem>
            <NavBarItem>
                <Link to='https://www.freecodecamp.org/neohuncho' rel="noopener noreferrer" target="_blank">
                    <FCC src={fcc} alt='Free Code Camp link' />
                </Link>
            </NavBarItem>
            <NavBarItem>
                <HamburgerMobile aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} src={hamburger} alt='menu' />
                <ThisMenu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledLink to="/">
                        <ThisMenuItem onClick={handleClose} >Home</ThisMenuItem>
                    </StyledLink>
                    <StyledLink to="/my-projects">
                        <ThisMenuItem onClick={handleClose} >My Projects</ThisMenuItem>
                    </StyledLink>
                    <StyledLink to="/about-me">
                        <ThisMenuItem onClick={handleClose} >About Me</ThisMenuItem>
                    </StyledLink>
                </ThisMenu>
            </NavBarItem>
            <StyledLink to="/my-projects">
                <NotMobileLink  >My Projects</NotMobileLink>
            </StyledLink>
            <StyledLink to="/about-me">
                <NotMobileLink  >About Me</NotMobileLink>
            </StyledLink>
        </Navbar>
    )
}

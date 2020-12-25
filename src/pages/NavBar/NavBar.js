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
top: 2vh;
left: 2vw;
width: 100%;
align-items: center;
color: white;
font-family: Roboto;
font-weight: 500;
z-index: 3; 
    @media ${mediaQueries.mobile}{
        margin-left:4vw;
    }
`

export const Grid= styled.div`
 display: grid;
        grid-template-rows: 100%;
        gap: 0px 0px;
        grid-template-areas:
            "Home Github FCC myProjects aboutMe";
    @media ${mediaQueries.desktop}{
        grid-template-columns: 60% 5% 15% 10% 10%;}

     @media ${mediaQueries.ipad}{
        grid-template-columns: 40% 6% 13% 21% 22%;}

     @media ${mediaQueries.ipadPro}{
        grid-template-columns: 38% 6% 13% 22% 22%;}

    @media ${mediaQueries.mobile}{
        grid-template-areas:
            "Home Github FCC Menu";
        grid-template-columns: 54% 10% 17% 0%;}
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
        cursor: pointer;
        font-size: 125%;
        
       
    }
`
export const TitleItem = styled(NavBarItem)`
grid-area: Home;
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
grid-area: FCC;
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
grid-area: Github;
    @media ${mediaQueries.mobile}{
        width: 6vw;
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
        width: 8vw;
        grid-area: Menu;
    }

    @media ${mediaQueries.nonmobile}{
        display:none;
        width:0px;
        height:0px;
    }

`
//for menu dropdown on mobile
export const ThisMenu = styled(Menu)`
    @media ${mediaQueries.desktop}{
        display:none;
    }

    @media ${mediaQueries.ipadAndIpadPro}{
        display:none;
    }
`
//for menu dropdown on mobile
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
            <Grid >
            <StyledLink to="/">
                <TitleItem >W.G</TitleItem>
            </StyledLink>
            <NavBarItem>
                <a href='https://github.com/NeoHuncho' rel="noopener noreferrer" target="_blank">
                    <Github src={github} alt='Free Code Camp link' />
                </a>
            </NavBarItem>
            <NavBarItem>
                <a href='https://www.freecodecamp.org/neohuncho' rel="noopener noreferrer" target="_blank">
                    <FCC src={fcc} alt='Free Code Camp link' />
                </a>
            </NavBarItem>
         
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
                        <ThisMenuItem style={{gridArea: 'myProjects' }} onClick={handleClose} >My Projects</ThisMenuItem>
                    </StyledLink>
                    <StyledLink to="/about-me">
                        <ThisMenuItem style={{gridArea: 'aboutMe' }} onClick={handleClose} >About Me</ThisMenuItem>
                    </StyledLink>
                </ThisMenu>
           
            <StyledLink to="/my-projects">
                <NotMobileLink  >My Projects</NotMobileLink>
            </StyledLink>
            <StyledLink to="/about-me">
                <NotMobileLink  >About Me</NotMobileLink>
            </StyledLink>
            </Grid >
        </Navbar>
    )
}

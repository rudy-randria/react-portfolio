import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from '../../assets/img/logo.png'; 
import contactImg from '../../assets/img/contact.png'; 

// Définir les composants Styled
const NavbarContainer = styled.nav`
    background: rgb(30,30,30);
    height: 5rem;
    width: 100vw;
    margin: 0 auto;
    max-width: 75rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;
`;

const Logo = styled.img`
    object-fit: cover;
    height: 3rem;
    width: 4rem;
`;

const DesktopMenu = styled.div`
    display: flex;
`;

const DesktopMenuListItem = styled(Link)`
    color: white;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
        color: yellow;
    }
`;

const DesktopMenuBtn = styled.button`
    background: white;
    color: black;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    border-radius: 2rem;
`;

const DesktopMenuImg = styled.img`
    object-fit: cover;
    height: 1rem;
    width: 1rem;
    margin: 0 1rem;
`;

// Composant Navbar
export default function Navbar() {
  return (
    <NavbarContainer>
        <Logo src={logo} alt='Logo' />
        <DesktopMenu>
            <DesktopMenuListItem to='home' spy={true} smooth={true} offset={-70} duration={500}>Home</DesktopMenuListItem>
            <DesktopMenuListItem to='clients' spy={true} smooth={true} offset={-70} duration={500}>Clients</DesktopMenuListItem>
            <DesktopMenuListItem to='portfolio' spy={true} smooth={true} offset={-70} duration={500}>Portfolio</DesktopMenuListItem>
            <DesktopMenuListItem to='contact' spy={true} smooth={true} offset={-70} duration={500}>Contact</DesktopMenuListItem>
        </DesktopMenu>
        <DesktopMenuBtn>
            <DesktopMenuImg src={contactImg} alt='' />
            Contact Me
        </DesktopMenuBtn>
    </NavbarContainer>
  );
}

import React from 'react';
import bg from '../../assets/img/image.png';
import btnImg from '../../assets/img/hireme.png'
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const IntroSection = styled.section`
    height: calc(100vh - 4rem);
    width: 100vw;
    max-width: 75rem;
    margin: 0 auto;
    overflow: hidden;
`;

const BackgroundImage = styled.img`
    position: absolute;
    top:5rem;
    right: 10vw;
    z-index: -1;
    object-fit: cover;
    height: 80vh;
`;

const IntroContent = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 2rem;
    font-size: 3rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Hello = styled.span`
    font-size: 1.75rem;
    font-weight: 100;
`;

const IntroName = styled.span`
    color: yellow;
`;

const IntroPara = styled.p`
    font-size: medium;
    font-weight: 300;
    letter-spacing: 1px;
`;

const Button = styled.button`
    background: white;
    margin: 1rem 0;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 2rem;
`;

const ButtonImage = styled.img`
    object-fit: cover;
    margin:0 0.25rem;
    height: 1rem;
`;

function Intro() {
    return (
        <IntroSection id="intro">
            <IntroContent className='introContent'>
                <Hello className='hello'>Hello,</Hello>
                <span className='introText'>I'm<IntroName className='introName'> Rudy</IntroName> <br/> Full-stack Developer</span>
                <IntroPara className='introPara'>It's not that I'm so smart, it's just that I stay with problems longer.</IntroPara>
                <ScrollLink to="portfolio"><Button className='btn'><ButtonImage src={btnImg} alt='Hire me' className='btnImg'/>Hire me</Button></ScrollLink>
            </IntroContent>
            <BackgroundImage src={bg} alt='Profile' className='bg'/>
        </IntroSection>
    )
}

export default Intro;

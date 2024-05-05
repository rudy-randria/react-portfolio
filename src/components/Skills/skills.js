import React from 'react';
import styled from 'styled-components';
import UIDesign from '../../assets/img/ui-design.png';
import WebDesign from '../../assets/img/website-design.png';
import AppDesign from '../../assets/img/app-design.png';

const SkillsSection = styled.section`
    overflow: hidden;
    width: 100vw;
    max-width: 65rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
`;

const SkillTitle = styled.span`
    font-size: 3rem;
    font-weight: 600;
    padding-top: 3rem;
    margin-bottom: 1.5rem;
`;

const SkillDesc = styled.span`
    font-weight: 400;
    font-size: 1rem;
    max-width: 51rem;
    padding: 0 2rem;
`;

const SkillBars = styled.div`
    margin: 1.5rem;
    width: 100vw;
    max-width: 80%;
    text-align: left;
`;

const SkillBar = styled.div`
    display: flex;
    margin: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    background: rgb(50,50,50);
`;

const SkillBarImg = styled.img`
    object-fit: cover;
    height: 2rem;
    width: 3rem;    
    margin-right: 2rem;
    margin-top: 2rem;
`;

const SkillBarText = styled.div`
    > p {
        font-size: 0.75rem;
        font-weight: 200;
    }

    @media screen and (max-width:720px) {
        > p {
            font-size: 2vw;       
        }
    }

    @media screen and (max-width:480px) {
        > p {
            font-size: 3vw;       
        }
    }

    > h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;

        @media screen and (max-width:480px) {
            font-size: 5vw;
        }
    }
`;

function Skills() {
  return (
    <SkillsSection id='skills'>
        <SkillTitle className='skillTitle'>What i do?</SkillTitle>
        <SkillDesc className='skillDesc'>A full stack developer is a proficient professional skilled in both front-end and back-end web development, capable of building and maintaining entire web applications using a variety of programming languages, frameworks, and tools.</SkillDesc>
        <SkillBars className='skillBars'>
            <SkillBar className='skillBar'>
                <SkillBarImg src={UIDesign} alt="UIDesign"  className='skillBarImg'/>
                <SkillBarText className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>UI/UX design refers to the process of creating intuitive, visually appealing user interfaces and experiences for digital products, focusing on enhancing usability, accessibility, and overall user satisfaction through thoughtful design choices and user-centric approaches.</p>
                </SkillBarText>
            </SkillBar>
            <SkillBar className='skillBar'>
                <SkillBarImg src={WebDesign} alt="WebDesign"  className='skillBarImg'/>
                <SkillBarText className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Web design encompasses the process of creating visually appealing and user-friendly layouts, graphics, and interfaces for websites, aiming to optimize user experience, navigation, and engagement while aligning with the brand's identity and objectives.</p>
                </SkillBarText>
            </SkillBar>
            <SkillBar className='skillBar'>
                <SkillBarImg src={AppDesign} alt="AppDesign"  className='skillBarImg'/>
                <SkillBarText className='skillBarText'>
                    <h2>App Design</h2>
                    <p>App design involves the creation of intuitive, visually engaging interfaces and experiences for mobile applications, focusing on usability, accessibility, and user satisfaction through careful consideration of user interactions, visual elements, and navigation flow to enhance the overall user experience and achieve the app's goals effectively.</p>
                </SkillBarText>
            </SkillBar>
        </SkillBars>
    </SkillsSection>
  )
}

export default Skills;

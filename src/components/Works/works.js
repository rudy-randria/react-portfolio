import React from 'react';
import styled from 'styled-components';
import Portfolio1 from '../../assets/img/portfolio-1.png';
import Portfolio2 from '../../assets/img/portfolio-2.png';
import Portfolio3 from '../../assets/img/portfolio-3.png';
import Portfolio4 from '../../assets/img/portfolio-4.png';
import Portfolio5 from '../../assets/img/portfolio-5.png';
import Portfolio6 from '../../assets/img/portfolio-6.png';

const WorksSection = styled.section`
    margin: 0 auto;
    min-height: calc(100vh - 4rem);
    width: 100vw;
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 1rem;
`;

const WorksTitle = styled.h2`
    margin: 1rem 0;
    font-size: 3rem;
`;

const WorksDesc = styled.span`
    font-weight: 300;
    font-size: 0.8rem;
    max-width: 45rem;
`;

const WorksImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 65rem;
    flex-wrap: wrap;
`;

const WorksImg = styled.img`
    object-fit: cover;
    height: 20rem;
    margin: 0.5rem;
`;

const WorkBtn = styled.button`
    margin: 3rem 0;
    padding: 0.5rem 2.5rem;
    border: none;
    background-color: white;
    border-radius: 2rem;
    font-size: 1rem;
`;

function Works() {
  return (
    <WorksSection id='works'>
        <WorksTitle className='worksTitle'>My portfolio</WorksTitle>
        <WorksDesc className='worksDesc'>A full stack developer is a versatile professional capable of designing, developing, and maintaining web applications, working on both the front-end and back-end aspects. Their work involves mastering multiple programming languages, frameworks, and tools, as well as handling databases and servers. In addition to creating user-friendly interfaces, they also ensure the functionality, security, and performance of applications, often collaborating with other team members to ensure smooth integration of different project components.</WorksDesc>
        <WorksImgs className='worksImgs'>
            <WorksImg src={Portfolio1} alt='Portfolio1' className='worksImg'></WorksImg>
            <WorksImg src={Portfolio2} alt='Portfolio2' className='worksImg'></WorksImg>
            <WorksImg src={Portfolio3} alt='Portfolio3' className='worksImg'></WorksImg>
            <WorksImg src={Portfolio4} alt='Portfolio4' className='worksImg'></WorksImg>
            <WorksImg src={Portfolio5} alt='Portfolio5' className='worksImg'></WorksImg>
            <WorksImg src={Portfolio6} alt='Portfolio6' className='worksImg'></WorksImg>
        </WorksImgs>
        <WorkBtn className='workBtn'>See More</WorkBtn>
    </WorksSection>
  );
}

export default Works;

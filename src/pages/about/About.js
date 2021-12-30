import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from "../../assets/coding.svg"

const About = () => {
    return (
       <AboutContainer>
            <StyledImage src={codingSvg} />
            <HeaderContainer>
                <h1>About Software Developer <span>Tayfur Academy</span> </h1>    
            </HeaderContainer>
            <InfoContainer>
                <h2>Hi, I'm Tayfur</h2>
                    <h3>I'm currently learning Full Stack Development Languages</h3>
                    <h4>I've already known JS, ReactJS, ReactNative, NodeJS, SQL, Python, AWS Services</h4>
                    <h2>
                        <a href="mailto:mltm0204@gmail.com">Send email</a> : mltm0204@gmail.com
                    </h2>
            </InfoContainer>
       </AboutContainer>
    )
}

export default About

import React from 'react'
import { Link } from 'react-router-dom';
import { Container,Button,Heading,MainHeading, GlobalStyle } from '../../globalStyles';
import styled from 'styled-components';

const HeroSection = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    color : #fff;
    
`
const HeroVideo = styled.video`
    width:100%;
    height:100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
`

const HeroText = styled.p`
    color:#fff;
    text-align:center;
    padding:30px;
    font-size: 20px;
    letter-spacing: 4px;
`
const ButtonWrapper = styled.div`
    display:flex;
    justify-content: center;
`
const HeroButton = styled(Button)`
  color:black;

  &:before{
      background: #fff;
      height:500%;
  }

  &:hover:before{
      height: 0%;
  }

  &:hover{
      color:white;
  }

`

function Hero() {
  return (
    <div>
        
        <HeroSection>
        <GlobalStyle />
            <HeroVideo src='./assets/hero.mp4' autoPlay muted />
            <Container>
                <MainHeading>Your data is secure with us</MainHeading>
                <HeroText>
                    We Provide The best Security systems from clients all over the world.
                </HeroText>
                <ButtonWrapper>
                    <Link to='/signup'>
                        <Button>Get Started</Button> 
                    </Link>
                    <HeroButton  >Find More</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    </div>
  )
}

export default Hero
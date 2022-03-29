import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width:300px;
    height: 300px;
    border: 1px solid #000;
    text-align: center;
    gap: 20px;
    
`

const Logo = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid #000;
    border-radius: 50%;
    margin: 20px;
    color: #000;
    margin:16px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h4`
    color: #000;
`
const Description = styled.p`
    color: black;
`

function Card({images,title,description,ClsNm}) {
  return (




    <Container>
            <Logo className={ClsNm}  >{images}</Logo>
            <Title>{title}</Title>
            <Description>{description}</Description>
    </Container>
  ) 
}

export default Card
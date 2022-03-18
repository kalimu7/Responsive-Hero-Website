import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import './nav.css';
const Container = styled.div`
    z-index: 5;
    width: 100%;
    margin-top:30px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    position: absolute;

    @media (max-width: 600px){
        /* margin-top: 0;
        padding-top: 30px;
        background-color:#78808f ;
        height: calc(100vh);
        width: 100vw;
        align-items: flex-start; */
        display: block;
        
    }

`
const Logo = styled.img`
    width: 60px;
    height: 60px;
    margin: 0 20px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    flex: 1;
    color: #fff;
    @media (max-width: 600px){
        width: 100%;
        padding-bottom: 40px;
        
    }
`

const Left = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    @media (max-width: 600px){
        display: block;
        height: calc(100vh - 130px);
        width: 100%;
        text-align: center;
        background-color: #294b51;
        position: fixed;
        left: -100%;
        transition: all 0.8s;

    }
`

const NavLink = styled.h3`
    
    a{
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
    @media(max-width:600px){
        padding:80px 0px ;
    }
    
`

const Input = styled.input`
    display: none;
     
`
const Label = styled.label`
    display: none;
    @media (max-width: 600px){
        font-size: 30px;
        display: block;
        width: 100%;
        text-align: end;
        padding-right: 30px;
        cursor: pointer;
       
    }
    
`

function Navbar() {
  return (
    <div>
        <Container>
            <Right>
                <Logo src='./assets/logo.png' alt='logo' />
                <h3>Delta</h3>
                <Input type="checkbox" id="coding"  />
                <Label  for="coding"> <CgMenuRight /> </Label>
            </Right>
            <Left >
                <NavLink><a href="#">About</a></NavLink>
                <NavLink><a href="#">Pricing</a></NavLink>
                <NavLink><a href="#">Contact</a></NavLink>
                
            </Left>
            
        </Container>
    </div>
  )
}

export default Navbar
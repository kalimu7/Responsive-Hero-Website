import React from 'react'
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';

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
`

const Left = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    
`

const NavLink = styled.h3`
    a{
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
    cursor: pointer;
`


function Navbar() {
  return (
    <div>
        <Container>
            <Right>
            <input type="checkbox" id="coding" name="interest" value="coding" />
            <label for="coding"> <FaBeer /> </label>
                <Logo src='./assets/logo.png' alt='logo' />
                <h3>Delta</h3>
            </Right>
            <Left>
                <NavLink><a href="#">About</a></NavLink>
                <NavLink><a href="#">Pricing</a></NavLink>
                <NavLink><a href="#">Contact</a></NavLink>
            </Left>
        </Container>
    </div>
  )
}

export default Navbar
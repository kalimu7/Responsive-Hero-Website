import React from 'react'
import styled from 'styled-components';
import {featuresData} from '../data/FeaturesData';
import Card from './Hero/Card';

const Big_Conatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const Container = styled.div`
    display: flex;
    width: 75vw;
    flex-wrap: wrap;
    
`

const Headline = styled.h2`
    text-align: center;
    color: #000;
    margin: 50px 0px;
`

const Allfutures =featuresData.map((Singele_features)=>{
    return(
        <Card ClsNm={Singele_features.imgClass} title={Singele_features.name} description={Singele_features.description} images={Singele_features.icon} />
    )
})

function Futures() {
  return (
    <>
    <Headline>WHAT WE OFFER</Headline>
    <Big_Conatiner>
    <Container>
            {Allfutures}
    </Container>
    </Big_Conatiner>
    </>
  )
}

export default Futures
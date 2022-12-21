import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    ${mobile({
        height: '200px',
    })}
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        height: '200px',
    })}
`

const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    bottom:0;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color:rgba(0,0,0,0.4);
`

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid white;
    background-color:transparent;
    cursor: pointer;
    color:white;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>КУПИТЬ</Button>
            </Info>
        </Container>
    );
}

export default CategoryItem;
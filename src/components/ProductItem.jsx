import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.3);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    flex :1;
    margin: 5px;
    min-width: 300px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #f5fbfd; */
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }

    ${mobile({
        height: '420px',
    })}
`

const Image = styled.img`
    height:100%;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const ProductDesc = styled.div`
    text-align: center;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin: 5px 0;
`

const Price = styled.span`
    font-size:20px;
    margin: 0 auto;
`

const Product = styled.div`
    height:80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProductItem = ({ item }) => {
    return (
        <Container>
            <Product>
                <Image src={item.img} />
                <ProductDesc>
                    <Title>{item.title}</Title>
                    <Price>{item.price}</Price>
                </ProductDesc>
            </Product>
            <Info>
                <Icon>
                    <ShoppingCartIcon />
                </Icon>
                <Icon>
                    <Link to='/product' style={{textDecoration:'none', color:'black', transform:'scale(1.1)'}}>
                    <SearchIcon />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderIcon />
                </Icon>
            </Info>
        </Container>
    );
}

export default ProductItem;
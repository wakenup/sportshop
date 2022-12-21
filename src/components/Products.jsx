import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { popularProducts } from '../data';
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({
        padding: '0',
    })}
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => {
                return (<ProductItem item={item} key={item.id}/>)
            })}
        </Container>
    );
}

export default Products;
import React from 'react';
import styled from 'styled-components';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import {mobile} from '../responsive';

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Title>КАТАЛОГ ТОВАРОВ</Title>
            <Filter/>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default ProductList;
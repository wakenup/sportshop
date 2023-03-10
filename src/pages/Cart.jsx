import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {mobile} from '../responsive';

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        padding: '10px',
    })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 500;
    cursor: pointer;
    ${mobile({
        margin: '0 10px',
        width: '40%',
    })}
`

const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0 10px;
    ${mobile({
        display: 'none',
    })}
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding:30px;
    ${mobile({
        flexDirection:'column',
    })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection:'column',
        margin: '10px 0',
    })}

`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({
        flexDirection:'column',
    })}
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 0 5px;
`
const ProductPrice = styled.div`
    font-size: 28px;
    font-weight: 200;
`

const Summary = styled.div`
    flex: 1; 
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const Hr = styled.hr`
    background-color: #eee;
    height: 2px;
    border: none;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    text-align: center;
`
const SummaryItem = styled.div`
    margin-top:30px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.total==="total" && 800};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>??????????????</Title>
                <Top>
                    <TopButton>???????????????????? ??????????????</TopButton>
                    <TopTexts>
                        <TopText>???????? ??????????????(2)</TopText>
                        <TopText>???????????? ??????????????????(0)</TopText>
                    </TopTexts>
                    <TopButton>???????????????? ??????????</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src='./pictures/kon1.jpg' />
                                <Details>
                                    <ProductName><b>??????????: </b>???????????? TREK Skate Fur</ProductName>
                                    <ProductId><b>ID ????????????: </b> 23</ProductId>
                                    <ProductSize><b>????????????: </b>41</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon />
                                </ProductAmountContainer>
                                <ProductPrice>130 ??.</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src='./pictures/kon1.jpg' />
                                <Details>
                                    <ProductName><b>??????????: </b>???????????? TREK Skate Fur</ProductName>
                                    <ProductId><b>ID ????????????: </b> 23</ProductId>
                                    <ProductSize><b>????????????: </b>41</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon />
                                </ProductAmountContainer>
                                <ProductPrice>130 ??.</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>??????????</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>?????????? ????????????</SummaryItemText>
                            <SummaryItemPrice>260 ??.</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>????????????????</SummaryItemText>
                            <SummaryItemPrice>30 ??.</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem total='total'>
                            <SummaryItemText>????????????????</SummaryItemText>
                            <SummaryItemPrice>290 ??.</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default Cart;
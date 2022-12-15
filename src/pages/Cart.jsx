import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
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
`

const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding:30px;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;

`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
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
                <Title>КОРЗИНА</Title>
                <Top>
                    <TopButton>ПРОДОЛЖИТЬ ПОКУПКУ</TopButton>
                    <TopTexts>
                        <TopText>Твоя корзина(2)</TopText>
                        <TopText>Список желаемого(0)</TopText>
                    </TopTexts>
                    <TopButton>ОФОРМИТЬ ЗАКАЗ</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src='./pictures/kon1.jpg' />
                                <Details>
                                    <ProductName><b>Товар: </b>Коньки TREK Skate Fur</ProductName>
                                    <ProductId><b>ID товара: </b> 23</ProductId>
                                    <ProductSize><b>Размер: </b>41</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon />
                                </ProductAmountContainer>
                                <ProductPrice>130 р.</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src='./pictures/kon1.jpg' />
                                <Details>
                                    <ProductName><b>Товар: </b>Коньки TREK Skate Fur</ProductName>
                                    <ProductId><b>ID товара: </b> 23</ProductId>
                                    <ProductSize><b>Размер: </b>41</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon />
                                </ProductAmountContainer>
                                <ProductPrice>130 р.</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ЗАКАЗ</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Сумма заказа</SummaryItemText>
                            <SummaryItemPrice>260 р.</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Доставка</SummaryItemText>
                            <SummaryItemPrice>30 р.</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem total='total'>
                            <SummaryItemText>Суммарно</SummaryItemText>
                            <SummaryItemPrice>290 р.</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default Cart;
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:80%;
    max-height: 80vh;
    object-fit:cover;
`

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight:200;
`

const Desc = styled.p`
    margin: 26px 0px;
`

const Price = styled.span`
    font-size: 40px;
    font-weight:100;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`

const FilterItem = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight: 200;
`

const FilterColor = styled.div`
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin: 0px 10px;
    padding: 5px;
    font-size: 16px;
`

const FilterSizeOption = styled.option``

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 18px;
`
const AddContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;
`
const Button = styled.button`
    border: 2px solid teal;
    background-color: white;
    font-size: 18px;
    padding: 10px;
    font-weight: 500;

    &:hover {
        background-color: #f9f6f6;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src='./pictures/kon1.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>Коньки TREK Skate Fur</Title>
                    <Desc>Высокий классический ботинок идеально подойдет для любительского катания. Модель снабжена поддержкой голеностопа. Верх ботинка выполнен из высококачественной искусственной кожи, мягкий подклад из искусственного меха, подошва - твердый пластик . Лезвие изготовлено из нержавеющей стали. Анатомический ботинок и толстый язычок обеспечивает удобство и комфорт.
                    </Desc>
                    <Price>130 р.</Price>
                    <FilterContainer>
                        <FilterItem>
                            <FilterTitle>Цвет</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='blue' />
                            <FilterColor color='gray' />
                        </FilterItem>
                        <FilterItem>
                            <FilterTitle>Размер</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>38</FilterSizeOption>
                                <FilterSizeOption>39</FilterSizeOption>
                                <FilterSizeOption>40</FilterSizeOption>
                                <FilterSizeOption>41</FilterSizeOption>
                                <FilterSizeOption>42</FilterSizeOption>
                                <FilterSizeOption>43</FilterSizeOption>
                            </FilterSize>
                        </FilterItem>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </AmountContainer>
                        <Button>
                            Добавить в корзину
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default Product;
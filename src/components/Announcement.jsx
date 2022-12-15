import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`

const Announcement = () => {
    return (
        <Container>
            Спецпредложение! Бесплатная доставка при заказе от 200 BYN.
        </Container>
    );
}

export default Announcement;
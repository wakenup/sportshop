import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 60vh;
    background-color:#fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 40px;
`

const Description = styled.div`
    
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    flex: 9;
    border: 0;
    padding: 5px;
    font-size: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Подписаться на новости и акции</Title>
            {/* <Description>Присоединяйся!</Description> */}
            <InputContainer>
                <Input placeholder='Введите Ваш Email' />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    );
}


export default Newsletter;
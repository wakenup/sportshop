import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:
    linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
    url('./pictures/back.jpg') center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 30px;
    width: 40%;
    background-color: white;
`

const Title = styled.h1`
    font-size: 26px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 30px 20px 0 0;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 18px;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Создать аккаунт</Title>
                <Form>
                    <Input placeholder="Имя" />
                    <Input placeholder="Фамилия" />
                    <Input placeholder="Email" />
                    <Input placeholder="Логин" />
                    <Input placeholder="Пароль" />
                    <Input placeholder="Повторите пароль" />
                    <Agreement>
                        Предоставляя свои персональные данные Покупатель даёт согласие на обработку, хранение и использование своих персональных данных
                    </Agreement>
                    <Button>Создать</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;
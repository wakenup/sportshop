import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive'

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
    width: 25%;
    background-color: white;
    ${mobile({
        width: '80%',
    })}
`

const Title = styled.h1`
    font-size: 26px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 18px;
    margin-bottom: 14px;
    margin-top: 10px;
    cursor: pointer;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Войти в аккаунт</Title>
                <Form>
                    <Input placeholder="Логин" />
                    <Input placeholder="Пароль" />
                    <Button>Войти</Button>
                    <Link>Забыли пароль?</Link>
                    <Link>Создать аккаунт</Link>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Login;
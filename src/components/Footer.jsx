import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title =styled.h3`
    margin-bottom: 30px;
`

const List =styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem =styled.li`
    width:50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SportShop</Logo>
                <Description>Наша компания существует уже много лет, на рынке мы являемся самой надёжной и успешной компанией. Покупайте в нашем интернет-магазине снова и снова.</Description>
                <SocialContainer>
                    <SocialIcon color='#3b5999'>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color='#e4405f'>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color='#55acee'>
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color='#e60023'>
                        <TelegramIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Полезные ссылки</Title>
                <List>
                    <ListItem>Помощь</ListItem>
                    <ListItem>Доставка</ListItem>
                    <ListItem>Оплата</ListItem>
                    <ListItem>Форум</ListItem>
                    <ListItem>Новости</ListItem>
                    <ListItem>Магазины</ListItem>
                    <ListItem>Вакансии</ListItem>
                    <ListItem>Бонусная программа</ListItem>
                    <ListItem>Партнерская программа</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Контакты</Title>
                <ContactItem>
                <RoomIcon style={{marginRight:10}}/> Юр. адрес: 220070, Республика Беларусь, г. Минск, ул. Пушкина, 11Б, оф.12/1
                </ContactItem>
                <ContactItem>
                <PhoneIcon style={{marginRight:10}}/> +375 29 666 77 88
                </ContactItem>
                <ContactItem>
                <MailIcon style={{marginRight:10}}/> fsoce@sportshop.by
                </ContactItem>
            </Right>
        </Container>
    );
}

export default Footer;
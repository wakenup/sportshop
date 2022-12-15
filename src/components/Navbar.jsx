import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items:center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex:1;
    text-align:center;
`

const Logo = styled.h1`
    font-weight:bold;
`

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content:flex-end;
    align-items:center;
`

const MenuItem = styled.div`
    font-size:16px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>RUS</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:'gray',fontSize:20}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SportShop</Logo>
                </Center>
                <Right>
                    <MenuItem>КАТАЛОГ</MenuItem>
                    <MenuItem>ЗАРЕГИСТРИРОВАТЬСЯ</MenuItem>
                    <MenuItem>ВОЙТИ</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
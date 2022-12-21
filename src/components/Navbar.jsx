import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "40px"})};
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    ${mobile({padding: "10px"})};
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
    ${mobile({display: 'none'})};
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
    ${mobile({width: '50px'})};
`

const Center = styled.div`
    flex:1;
    text-align:center;
    ${mobile({
        flex: 2,
    })}
`

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize: "22px",
        textAlign: 'center',
    })};
`

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content:flex-end;
    align-items:center;
    ${mobile({display: 'none'})};
`

const MobileMenu = styled.ul`
    display:none;
    background-color:#eef4f4;
    z-index: 3;
    position: absolute;
    top: 40px;
    right: 10px;
    list-style: none;
    margin: 0;
    padding:5px;
`

const RightMobile = styled.div`
    display:none;
    ${mobile({display:'block',
    posistion: 'relative',
    marginRight: '20px',
    })};
    &:hover {
        ${MobileMenu} {
            display:block;
        }
    };
`



const MobileMenuItem = styled.li`
    margin: 5px;
    font-size: 12px;
`


const MenuItem = styled.div`
    font-size:16px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "14px", marginLeft: "10px"})};
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
                    <Logo>
                        <Link to='/' style={{textDecoration:'none', color:'black'}}>SportShop</Link>
                        </Logo>
                </Center>
                <Right>
                    <MenuItem>
                    <Link to='/catalog' style={{textDecoration:'none', color:'black'}}>КАТАЛОГ</Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to='/register' style={{textDecoration:'none', color:'black'}}>ЗАРЕГИСТРИРОВАТЬСЯ</Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to='/login' style={{textDecoration:'none', color:'black'}}>ВОЙТИ</Link>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <Link to='/cart' style={{textDecoration:'none', color:'black'}}>
                                <ShoppingCartIcon color="action" />
                            </Link>
                        </Badge>
                    </MenuItem>
                </Right>
                <RightMobile>
                    <MenuIcon />
                    <MobileMenu>
                        <MobileMenuItem>КАТАЛОГ</MobileMenuItem>
                        <MobileMenuItem>ЗАРЕГИСТРИРОВАТЬСЯ</MobileMenuItem>
                        <MobileMenuItem>ВОЙТИ</MobileMenuItem>
                    </MobileMenu>
                </RightMobile>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
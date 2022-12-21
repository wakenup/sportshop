import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
        flexDirection: 'column',
        width: '100vw',
        padding: '10px 0px',
    })}
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item => {
                return(
                <CategoryItem item={item} key={item.id}/>
                )
            })}
        </Container>
    );
}

export default Categories;
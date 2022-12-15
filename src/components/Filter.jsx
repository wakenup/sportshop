import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`

const FilterItem = styled.div`
    
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight:600;
    margin-right:20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right:20px;
`

const Option = styled.option`
    
`

const Filter = () => {
    return (
        <Container>
            <FilterItem>
                <FilterText>ФИЛЬТР</FilterText>
                <Select>
                    <Option disabled selected>Вид спорта</Option>
                    <Option>Футбол</Option>
                    <Option>Хоккей</Option>
                    <Option>Баскетбол</Option>
                    <Option>Зимние виды спорта</Option>
                    <Option>Волейбол</Option>
                </Select>
                <Select>
                    <Option disabled selected>Фирма</Option>
                    <Option>Nike</Option>
                    <Option>Adidas</Option>
                    <Option>Puma</Option>
                    <Option>Joma</Option>
                    <Option>Outventure</Option>
                </Select>
                <Select>
                    <Option disabled selected>Тип товара</Option>
                    <Option>Одежда</Option>
                    <Option>Экипировка</Option>
                    <Option>Снаряжение</Option>
                    <Option>Аксессуар</Option>
                </Select>
            </FilterItem>
            <FilterItem>
                <FilterText>СОРТИРОВКА</FilterText>
                <Select>
                    <Option disabled selected>Сортировать по</Option>
                    <Option>Цене (от меньшей к большей)</Option>
                    <Option>Цене (от большей к меньшей)</Option>
                </Select>
            </FilterItem>
        </Container>
    );
}

export default Filter;
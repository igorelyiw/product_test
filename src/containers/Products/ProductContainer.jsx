import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addProductThunk } from '../../store/productSlice';

import CardProduct from './CardProduct'
import Navbar from './Navbar';

const Wrapper = styled.div``;
const List = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;

const ProductContainer = () => {
    const state = useSelector(state => state.product.products);
    const dispatch = useDispatch()
    const addProduct = (arr) => {
        const id = Math.floor(Math.random() * (10000 - 0)) + 0
        dispatch(addProductThunk({ ...arr, id }));
    }
    const productList = state.map(item => <CardProduct key={item.id} id={item.id} image={item.imageUrl} name={item.name} count={item.count} size={item.size} />)

    return (
        <Wrapper>
            <Navbar addProduct={(arr) => addProduct(arr)} />
            <List>
                {productList}
            </List>
        </Wrapper>
    )
}

export default ProductContainer

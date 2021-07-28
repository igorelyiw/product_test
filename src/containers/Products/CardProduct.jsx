import { Button } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { H3 } from '../../components/Text';

const Wrapper = styled.div`
width:400px;
padding:20px;
box-shadow:inset 0 0 10px #000000;
cursor:pointer;
margin-top:20px;
display:flex;
flex-direction:column;
    `;
const Image = styled.img`
    width:100%;
    height:350px;
    `;
const Title = styled(H3)`
text-align:center;
`;
const DetailsWrapper = styled.span``;

const CardProduct = props => {
    const { id, name, image, size, count } = props;
    return (
        <Wrapper>
            <Image src={image} alt='There must be image' />
            <Title bold>{name}</Title>
            <DetailsWrapper>
                Description: This product has height {size.height}sm and width {size.width}sm
            </DetailsWrapper>
            <DetailsWrapper>
                Count: {count}
            </DetailsWrapper>
            <NavLink to={"/details/" + id}>
                <Button type="primary">Details</Button>
            </NavLink>
        </Wrapper>
    )
}

export default CardProduct

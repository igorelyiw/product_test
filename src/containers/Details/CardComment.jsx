import { Button } from 'antd';
import React from 'react'
import styled from 'styled-components';
const Card = styled.div`
border:1px solid black;
margin-top:8px;
`;
const TitleComment = styled.div`
padding:8px;
display:flex;
justify-content:space-between;
`;
const Description = styled.div`
padding:8px;
`;

const CardComment = props => {
    const { date, description, id, Patch, productId } = props
    return (
        <Card>
            <TitleComment>{date}<Button danger onClick={() => Patch({ id, productId })}>delete</Button></TitleComment>
            <Description>{description}</Description>
        </Card>
    )
}

export default CardComment

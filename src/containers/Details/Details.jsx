import { Button } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import AddComments from './AddComments';
import Comments from './Comments';

const ContentWrapper = styled.div`
display:flex;
justify-content:space-around;
`;
const DetailsWrapper = styled.div`
width:35%;
`;
const Span = styled.span`
display:block;
line-height:30px;
`
const Description = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
`;

const Image = styled.img`
max-height:500px;
`;
const Wrapper = styled.div``;
const Details = props => {
    const { image, name, count, weight, size, comments, handelAddComment, Patch, onEdit, deleteProduct } = props
    return (

        <Wrapper>
            <NavLink to='/'>Back</NavLink>
            <ContentWrapper>
                <Image src={image} />
                <DetailsWrapper>
                    <Description>
                        <Span> Name of product: {name}</Span>
                        <Span>
                            Count: We have {count}  items.
                        </Span>
                        <Span>Weight:{weight}</Span>
                        <Span>Size: height {size.height} mm and width {size.width} mm </Span>
                    </Description>
                    <Button type="primary" onClick={() => onEdit()}>Edit</Button>
                    <Button type="primary" danger onClick={() => deleteProduct()}>Delete</Button>
                    <Comments Patch={(id) => Patch(id)} comments={comments} />
                    <AddComments handelAddComment={(comment) => handelAddComment(comment)} />
                </DetailsWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Details

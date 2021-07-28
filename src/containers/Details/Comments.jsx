import React from 'react'
import styled from 'styled-components'

import CardComment from './CardComment';
const Wrapper = styled.div`
border:1px solid black;
margin-top:40px;
padding:20px;
`;
const CommentsWrapper = styled.div``;

const Comments = ({ comments, Patch }) => {

    return (

        <Wrapper>
            <h1>Comments:</h1>
            <CommentsWrapper>
                {comments ? comments.map(item => <CardComment key={item.id} id={item.id} productId={item.productId} date={item.date} description={item.description} Patch={(id) => Patch(id)} />)
                    : null
                }
            </CommentsWrapper>
        </Wrapper>
    )
}

export default Comments

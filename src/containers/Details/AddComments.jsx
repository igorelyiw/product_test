import React from 'react'
import styled from 'styled-components';
import { Button, Input } from 'antd';

const { TextArea } = Input;
const Wrapper=styled.div`
margin-top:16px;
`;
const AddComments = ({handelAddComment}) => {
    const [state,setState]=React.useState('');
    const onHandler=()=>{
        handelAddComment(state);
        setState(' ')
    }
    return (
        <Wrapper>
            <h1>Add comment:</h1>
            <TextArea onChange={(e)=>setState(e.target.value)} value={state} rows={4} />
            <Button type="primary" onClick={()=>onHandler()}>Send</Button>
        </Wrapper>
    )
}

export default AddComments

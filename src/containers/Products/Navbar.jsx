import { Button } from 'antd';
import React from 'react'
import styled from 'styled-components';

import { Modal } from '../../components/Modal';
import { ProductForm } from '../../components/ProductForm';
const Wrapper = styled.div``;

const Navbar = ({ addProduct }) => {
    const [isOpenModal, setIsOpenModal] = React.useState(false);

    return (
        <Wrapper>
            <Button type="primary" onClick={() => setIsOpenModal(true)}>Add product</Button>
            <Modal
                onClose={() => setIsOpenModal(false)}
                isOpen={isOpenModal}
                isClosable
            >
                <ProductForm onClose={() => setIsOpenModal(false)} onHandleSubmit={(arr) => addProduct(arr)} />
            </Modal>
        </Wrapper>
    )
}

export default Navbar
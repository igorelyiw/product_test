import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom';

import { Modal } from '../../components/Modal';
import { ProductForm } from '../../components/ProductForm';
import { addComment, deleteComment, deleteProductReducer, updateProductThunk } from '../../store/productSlice';

import Details from './Details';

const DetailsContainer = () => {
    const state = useSelector(state => state.product.products)
    const { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch()
    const details = state.find(item => item.id === Number(id))
    const handelAddComment = (comment) => {
        fetch(' http://localhost:3001/products/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                ...details,
                comments: [...details.comments, { id: Math.floor(Math.random() * 100), productId: Number(id), description: comment, date: new Date().toDateString() }]
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(addComment(json)));
    }
    const Patch = (obj) => {
        fetch(' http://localhost:3001/products/' + id, {
            method: 'PUT',
            body: JSON.stringify({ ...details, comments: details.comments.filter(item => item.id !== Number(obj.id)) }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch(deleteComment(json)));
    }
    const [isOpenEditModal, setIsOpenEditModal] = React.useState(false)
    const onEdit = () => {
        setIsOpenEditModal(true)
    }
    const deleteProduct = () => {
        fetch(' http://localhost:3001/products/' + id, {
            method: 'DELETE',
        }).then(resp => dispatch(deleteProductReducer(id)))
        history.push('/')
    }
    const updateProduct = (arr) => {
        dispatch(updateProductThunk(arr));
    }
    return (
        <>
            {state.length > 0 ?
                <Details
                    image={details.imageUrl}
                    size={details.size}
                    weight={details.weight}
                    name={details.name}
                    count={details.count}
                    comments={details.comments}
                    handelAddComment={(comment) => handelAddComment(comment)}
                    Patch={(id) => Patch(id)}
                    onEdit={() => onEdit()}
                    deleteProduct={() => deleteProduct()}
                />
                : null
            }
            {
                state.length > 0 ?
                    <Modal
                        onClose={() => setIsOpenEditModal(false)}
                        isOpen={isOpenEditModal}
                        isClosable
                    >
                        <ProductForm
                            id={id}
                            image={details.imageUrl}
                            width={details.size.width}
                            height={details.size.height}
                            weight={details.weight}
                            name={details.name}
                            count={details.count}
                            comments={details.comments}
                            onClose={() => setIsOpenEditModal(false)}
                            onHandleSubmit={(arr) => updateProduct(arr)} />
                    </Modal>
                    : null
            }
        </>
    )
}

export default DetailsContainer

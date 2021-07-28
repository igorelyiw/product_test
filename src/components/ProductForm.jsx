import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';



const InputCustom = styled.input`
width:300px;

padding:8px;
border-radius:5px;
margin:12px 0;
`;
const SignForm = styled.form`
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const Label = styled.span`
font-weight:bold;
`;
const Error=styled.div`
color:red;
`;
export const ProductForm = ({ onHandleSubmit, onClose, name = '', height = 0, width = 0, count = 0, weight = '', image = '', comments = [], id, addProduct }) => {

  const formik = useFormik({
    initialValues: {
      name,
      image,
      height,
      width,
      count,
      weight,
      id,
      comments
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Must be 55 characters or less')
        .required('Required'),
        image: Yup.string()
        .min(20, 'Must http')
        .required('Required'),
        count: Yup.number()
        .min(2, "Must be more than 2 characters")
        .required("This field is requried"),
        weight:Yup.string()
        .min(2, 'Must be 10 characters or less')
        .required('Required'),

    }),
    onSubmit: values => {

      const newData = {
        id: Number(values.id),
        name: values.name,
        imageUrl: values.image,
        count: values.count,
        size: {
          width: values.width,
          height: values.height
        },
        weight: values.weight + 'g',
        comments: values.comments
      }
      onClose()

      onHandleSubmit(newData);
    },
  });
  return (
    <SignForm onSubmit={formik.handleSubmit}>
      <Label >Name:</Label>
      <InputCustom
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder={'Write title'}
      />
      {formik.errors.name && formik.touched.name ? (
              <Error>{formik.errors.name}</Error>
            ) : null}
      <Label >Count:</Label>
      <InputCustom
        id="count"
        name="count"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.count}
        placeholder={'Write count'}
      />
      {formik.errors.count && formik.touched.count ? (
              <Error>{formik.errors.count}</Error>
            ) : null}
      <Label >Put image URL:</Label>
      <InputCustom
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
        placeholder={'Put item URL'}
      />
      {formik.errors.image && formik.touched.image ? (
              <Error>{formik.errors.image}</Error>
            ) : null}
      <InputCustom
        id="width"
        name="width"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.width}
        placeholder={'Put item width'}
      />
      
      <InputCustom
        id="height"
        name="height"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.height}
        placeholder={'Put item height'}
      />
      <Label >Weight:</Label>
      <InputCustom
        id="weight"
        name="weight"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.weight}
        placeholder={'Write weight'}
      />
       {formik.errors.weight && formik.touched.weight ? (
              <Error>{formik.errors.weight}</Error>
            ) : null}
      <div>
        <button type="submit" >Send</button>
        <button type="button" onClick={() => onClose()} >Close</button>
      </div>

    </SignForm>
  );
};
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async () => {
    const response = await fetch(' http://localhost:3001/products')
      .then((response) => {
        return response.json();
      })
    return response
  }
)
export const addProductThunk = createAsyncThunk(
  'product/addProductThunk',
  async (obj) => {
    const response = await fetch('http://localhost:3001/products', {
      method: 'POST',
      body: JSON.stringify({ ...obj, id: Math.floor(Math.random() * (10000 - 0)) + 0 }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())

    return response
  }
)
export const updateProductThunk = createAsyncThunk(
  'product/updateProductThunk',
  async (obj) => {
    const response = await fetch(' http://localhost:3001/products/' + obj.id, {
      method: 'PUT',
      body: JSON.stringify({ ...obj }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
    return response
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addComment(state, action) {
      state.products = state.products.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        }
        return item
      })
    }
    ,
    deleteComment(state, action) {
      state.products = state.products.map(item => {
        if (item.id === Number(action.payload.id)) return action.payload
        return item
      })
    },
    deleteProductReducer(state, action) {
      state.products = state.products.filter(item => item.id !== Number(action.payload))
    }
  },
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      state.products = action.payload
    },
    [addProductThunk.fulfilled]: (state, action) => {
      state.products.push(action.payload)
    },
    [updateProductThunk.fulfilled]: (state, action) => {
      state.products = state.products.map(item => {
        if (item.id === Number(action.payload.id)) {
          return action.payload
        }
        return item
      })
    },
  }
})

export const { addComment, deleteComment, deleteProductReducer } = productSlice.actions;
export default productSlice.reducer;
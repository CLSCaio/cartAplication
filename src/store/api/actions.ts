import axios from "axios"

export const types = {
  SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
}

const url = 'http://localhost:27127'

const setProductList = {
  setProductList: () => {
    const req = axios.get(`${url}`)
    const data = req.then(resp => resp.data)
    return {
      type: types.SET_PRODUCT_LIST,
      payload: data
    }
  },
  
  removeFromCart: (id: number) => ({
    type: types.REMOVE_FROM_CART,
    payload: id
  }),
  
  addToCart: (id: number) => ({
    type: types.ADD_TO_CART,
    payload: id
  })
}

export default setProductList
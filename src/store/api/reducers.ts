import { types } from './actions'

const INITIAL_STATE: any = {
  list: [],
  cartList: []
}

export const productList = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {

    case types.SET_PRODUCT_LIST:
      return ({
        ...state, 
        list: action.payload
      })

    case types.ADD_TO_CART: 
      const addItem = state.cartList.find((id: any) => id === action.payload)
      if(!addItem) {
        const apiItem = state.list.data.find((items: any ) => items.id == action.payload)
        state.cartList.push(apiItem)
      }
      return ({
        ...state,
      })
       
    case types.REMOVE_FROM_CART:
      const id = parseInt(action.payload)

      for(let i=0; i<state.cartList.length; i++) {
        if(state.cartList[i].id == id) {
          state.cartList.splice(i, 1)
        }
      }
      return ({
        ...state, 
      })

    default: return state
  }
}

   
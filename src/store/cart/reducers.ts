import { types } from './actions'

const INITIAL_STATE:object = {
  cartAmount: 0
}

export const cart = (state: any = INITIAL_STATE, action:any) => {
  switch(action.type) {
    case types.INCREMENT_CART_AMOUNT:
      state.cartAmount++
      return ({
        ...state, 
      })

      case types.DECREMENT_CART_AMOUNT:
        state.cartAmount--
      return ({
        ...state, 
      })
      
    default: return state
  }
}
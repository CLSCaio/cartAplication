import { types } from './actions'

const INITIAL_STATE:object = {
  height: '50px'
}

export const menu = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {

    case types.SET_OPEN_MENU:
      return {
        ...state,
        height: action.payload
      }
      
    default: 
      return state
  }
}
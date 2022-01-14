import { types } from './actions'

const INITIAL_STATE:object = {
  nameLogo: 'HomePage'
}

export const nameLogo = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {

    case types.SET_NAME_LOGO:
      return {
        ...state,
        nameLogo: action.payload,
      }
      
    default: 
      return state
  }
}
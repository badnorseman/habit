import * as actionTypes from '../constants/actionTypes'

export default function userhabits(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.GET_USERHABITS:
      return Object.assign({}, state,
        action.userhabits.reduce((result, uh) => {
          if (uh._id !== 'habit' && uh._id !== 'customer') { result[uh._id] = uh }
          return result
        }, {}))
    case actionTypes.CREATE_USERHABIT:
      return { ...state, [action.userhabit._id]: action.userhabit }
    case actionTypes.UPDATE_USERHABIT:
      return Object.assign({}, state,
        Object.keys(state).reduce((result, uhId) => {
          if (uhId === action.userhabit._id) { result[uhId] = action.userhabit }
          return result
        }, {}))
    case actionTypes.DELETE_USERHABIT:
      return Object.assign({},
        Object.keys(state).reduce((result, uhId) => {
          if (uhId !== action.userhabit._id) { result[uhId] = state[uhId] }
          return result
        }, {}))
    default:
      return state
  }
}

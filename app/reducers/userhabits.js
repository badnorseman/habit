import * as actionTypes from '../constants/actionTypes'

export default function userhabits(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.GET_USERHABITS:
      return Object.assign({}, state,
        action.userhabits.reduce((result, uh) => {
          result[uh._id] = uh
          return result
        }, {})
      )
    case actionTypes.CREATE_USERHABIT:
      return { ...state, [action.userhabit._id]: action.userhabit }
    case actionTypes.DELETE_USERHABIT:
      return Object.assign({},
        Object.keys(state).reduce((result, uhId) => {
          if (uhId !== action.userhabit._id) { result[uhId] = state[uhId] }
          return result
        }, {})
      )
    default:
      return state
  }
}

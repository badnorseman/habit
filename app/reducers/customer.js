import * as actionTypes from '../constants/actionTypes'

export default function customer(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.GET_CUSTOMER_HABITS:
      return Object.assign({},
        action.habits.reduce((result, h) => {
          result[h._id] = h
          return result
        }, {}))
    case actionTypes.CREATE_CUSTOMER_HABIT:
      return { ...state, [action.habit._id]: action.habit }
    case actionTypes.UPDATE_CUSTOMER_HABIT:
      return Object.assign({}, state,
        Object.keys(state).reduce((result, hId) => {
          if (hId === action.habit._id) { result[hId] = action.habit }
          return result
        }, {}))
    case actionTypes.DELETE_CUSTOMER_HABIT:
      return Object.assign({},
        Object.keys(state).reduce((result, hId) => {
          if (hId !== action.habit._id) { result[hId] = state[hId] }
          return result
        }, {}))
    default:
      return state
  }
}

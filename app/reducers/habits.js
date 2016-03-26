import * as actionTypes from '../constants/actionTypes'

export default function habits(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.GET_HABITS:
      return { ...action.habits }
    default:
      return state
  }
}

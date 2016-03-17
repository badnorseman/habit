import * as actionTypes from '../constants/actionTypes'

const initialState = {}

export default function habit(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.HABIT_GET_SUCCESS:
      return {
        ...action.response.data
      }
    default:
      return state
  }
}

import * as actionTypes from '../constants/actionTypes'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'
import { readDoc } from '../utils/readDoc'

export const getHabits = () => dispatch => {
  return readDoc(`${dbUrl}/habit`, headers).then(res => res.json()).then(doc => {
    dispatch({ type: actionTypes.GET_HABITS, habits: doc })
  }).catch(err => err)
}

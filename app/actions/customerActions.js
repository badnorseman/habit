import * as actionTypes from '../constants/actionTypes'
import { makeAction } from '../utils/makeAction'
import { readAllDoc } from '../utils/readAllDoc'
import { createDoc } from '../utils/createDoc'
import { deleteDoc } from '../utils/deleteDoc'
import { updateDoc } from '../utils/updateDoc'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'

const errorMsg = makeAction(actionTypes.ERROR, 'error')

export const getCustomerHabits = () => dispatch => {
  return readAllDoc(dbUrl, headers).then(res => res.json()).then(docs => {
    if (docs.rows) {
      const habits = docs.rows.map(row => (row.doc))
      dispatch({ type: actionTypes.GET_CUSTOMER_HABITS, habits })
    } else {
      dispatch(errorMsg(docs.status))
    }
  }).catch(err => err)
}

export const startHabit = h => {
  const d = new Date()
  const habit = Object.assign({}, h)
  habit.started = d.toJSON()
  return dispatch => {
    return createDoc(dbUrl, headers, habit).then(res => res.json()).then(doc => {
      if (doc.ok) {
        [ habit._id, habit._rev ] = [ doc.id, doc.rev ]
        dispatch({ type: actionTypes.CREATE_CUSTOMER_HABIT, habit })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}

export const checkHabit = h => {
  const d = new Date()
  const habit = Object.assign({}, h)
  habit.checked = d.toJSON()
  return dispatch => {
    return updateDoc(dbUrl, headers, habit).then(res => res.json()).then(doc => {
      if (doc.ok) {
        habit._rev = doc.rev
        dispatch({ type: actionTypes.UPDATE_CUSTOMER_HABIT, habit })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}

export const endHabit = habit => {
  return dispatch => {
    return deleteDoc(dbUrl, headers, habit).then(res => res.json()).then(doc => {
      if (doc.ok) {
        dispatch({ type: actionTypes.DELETE_CUSTOMER_HABIT, habit })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}

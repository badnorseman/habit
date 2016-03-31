import * as actionTypes from '../constants/actionTypes'
import dbUrl from '../constants/dbUrl'
import { makeAction } from '../utils/makeAction'
import { readAllDoc } from '../utils/readAllDoc'
import { createDoc } from '../utils/createDoc'
import { deleteDoc } from '../utils/deleteDoc'
import { updateDoc } from '../utils/updateDoc'

const errorMsg = makeAction(actionTypes.ERROR, 'error')

export const getUserhabits = () => dispatch => {
  return readAllDoc(dbUrl).then(res => res.json()).then(docs => {
    if (docs.rows) {
      const userhabits = docs.rows.map(row => row.doc)
      dispatch({ type: actionTypes.GET_USERHABITS, userhabits })
    } else {
      dispatch(errorMsg(docs.status))
    }
  }).catch(err => err)
}

export const startUserHabit = userhabit => {
  const uh = Object.assign({}, userhabit)
  const d = new Date()
  uh.started = d.toJSON()
  return dispatch => {
    return createDoc(dbUrl, uh).then(res => res.json()).then(doc => {
      if (doc.ok) {
        [ uh._id, uh._rev ] = [ doc.id, doc.rev ]
        dispatch({ type: actionTypes.CREATE_USERHABIT, userhabit: uh })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}

export const checkUserHabit = userhabit => {
  const uh = Object.assign({}, userhabit)
  const d = new Date()
  uh.checked = d.toJSON()
  return dispatch => {
    return updateDoc(`${dbUrl}/${uh._id}?rev=${uh._rev}`, uh).then(res => res.json()).then(doc => {
      if (doc.ok) {
        uh._rev = doc.rev
        dispatch({ type: actionTypes.UPDATE_USERHABIT, userhabit: uh })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}

export const endUserHabit = userhabit => {
  return dispatch => {
    return deleteDoc(`${dbUrl}/${userhabit._id}?rev=${userhabit._rev}`).then(res => res.json()).then(doc => {
      if (doc.ok) {
        dispatch({ type: actionTypes.DELETE_USERHABIT, userhabit })
      } else {
        dispatch(errorMsg(doc.status))
      }
    }).catch(err => err)
  }
}

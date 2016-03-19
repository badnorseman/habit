import { makeAction } from '../utils/makeAction'
import { createDoc } from '../utils/createDoc'
import { readAllDoc } from '../utils/readAllDoc'
import { deleteDoc } from '../utils/deleteDoc'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'

const errorMsg = makeAction('ERROR', 'error')

export const getUser = () => {
  return dispatch => {
    return readAllDoc(dbUrl, headers).then(res => res.json()).then(docs => {
      if (docs.rows) {
        const user = docs.rows.map(row => (row.doc))
        dispatch({ type: 'GET_USER', user })
      }
      if (docs.status) {
        dispatch(errorMsg(docs.status))
      }
    }).catch(err => err)
  }
}

export const selectHabit = habit => {
  return dispatch => {
    return createDoc(dbUrl, headers, habit).then(res => {
      if (res.status === 201) {
        dispatch(getUser())
      } else {
        dispatch(errorMsg(res))
      }
    }).catch(err => err)
  }
}

export const deselectHabit = (id, rev) => {
  return dispatch => {
    return deleteDoc(dbUrl, headers, id, rev).then(res => {
      if (res.status === 200) {
        dispatch(getUser())
      } else {
        dispatch(errorMsg(res))
      }
    }).catch(err => err)
  }
}

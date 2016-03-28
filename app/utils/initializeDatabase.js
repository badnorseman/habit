import habits from '../data/habits.json'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'
import { createDatabase } from '../utils/createDatabase'
import { createDoc } from '../utils/createDoc'

const initializeHabit = () => {
  const data = {
    _id: 'habit',
    type: 'habit',
    summary: habits.summary,
    habits: habits.habits
  }
  return createDoc(dbUrl, headers, data).then(res => {
    if (res.status !== 201) { return res }
  }).catch(err => err)
}

const initializeCustomer = () => {
  const d = new Date()
  const data = {
    type: 'customer',
    created: d.toJSON()
  }
  return createDoc(dbUrl, headers, data).then(res => {
    if (res.status !== 201) { return res }
  }).catch(err => err)
}

export const initializeDatabase = () => {
  fetch(dbUrl).then(res => {
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status === 201) {
          initializeHabit()
          initializeCustomer()
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

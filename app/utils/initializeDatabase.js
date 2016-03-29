import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'
import { createDatabase } from '../utils/createDatabase'
import { initializeCustomer } from '../utils/initializeCustomer'
import { initializeHabit } from '../utils/initializeHabit'
import { deleteDatabase } from '../utils/deleteDatabase'

export const initializeDatabase = () => {
  deleteDatabase(dbUrl)

  fetch(dbUrl).then(res => {
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status === 201) {
          initializeCustomer(dbUrl, headers)
          initializeHabit(dbUrl, headers)
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

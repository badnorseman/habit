import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'
import { createDatabase } from '../utils/createDatabase'
import { initializeCustomer } from '../utils/initializeCustomer'
import { initializeHabit } from '../utils/initializeHabit'

export const initializeDatabase = () => {
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

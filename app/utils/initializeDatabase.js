import { createDatabase } from '../utils/createDatabase'
import { initializeCustomer } from '../utils/initializeCustomer'
import { initializeHabit } from '../utils/initializeHabit'

export const initializeDatabase = dbUrl => {
  fetch(dbUrl).then(res => {
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status === 201) {
          initializeCustomer(dbUrl)
          initializeHabit(dbUrl)
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

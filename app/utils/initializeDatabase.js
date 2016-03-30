import { createDatabase } from '../utils/createDatabase'
import { initializeCustomerDoc } from '../utils/initializeCustomerDoc'
import { initializeHabitDoc } from '../utils/initializeHabitDoc'

export const initializeDatabase = dbUrl => {
  fetch(dbUrl).then(res => {
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status === 201) {
          initializeCustomerDoc(dbUrl)
          initializeHabitDoc(dbUrl)
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

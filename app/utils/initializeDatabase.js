import dbUrl from '../constants/dbUrl'
import { createDatabase } from '../utils/createDatabase'
import { readDatabase } from '../utils/readDatabase'
import { initializeCustomer } from '../utils/initializeCustomer'
import { initializeHabits } from '../utils/initializeHabits'

export const initializeDatabase = () => {
  return readDatabase(dbUrl).then(res => {
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status == 200) {
          initializeCustomer()
          initializeHabits()
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

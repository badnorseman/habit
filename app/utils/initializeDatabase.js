import dbUrl from '../constants/dbUrl'
import { createDatabase } from '../utils/createDatabase'
import { readDatabase } from '../utils/readDatabase'
import { initializeCustomer } from '../utils/initializeCustomer'
import { initializeHabits } from '../utils/initializeHabits'

// Keep this while developing customer doc
// import { deleteDoc } from '../utils/deleteDoc'
// const id = 'customer'
// const rev = '72-15d12c3b0bc61f5533215de6c4c2cf71'

export const initializeDatabase = () => {
  // deleteDoc(`${dbUrl}/${id}?rev=${rev}`)
  return readDatabase(dbUrl).then(res => {
    // initializeCustomer()
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status === 200) {
          initializeCustomer()
          initializeHabits()
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

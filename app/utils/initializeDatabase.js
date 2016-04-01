import dbUrl from '../constants/dbUrl'
import { createDatabase } from '../utils/createDatabase'
import { readDatabase } from '../utils/readDatabase'
import { initializeCustomer } from '../utils/initializeCustomer'
import { initializeHabits } from '../utils/initializeHabits'

// Keep this while developing customer doc
// import { deleteDoc } from '../utils/deleteDoc'
// const id = 'customer'
// const rev = '93-e3dcbd17e2e40daa95ea4ed9e59a18ed'

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

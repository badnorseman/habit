import { createDatabase } from '../utils/createDatabase'

export const initializeDatabase = dbUrl => {
  fetch(dbUrl).then(res => {
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status !== 201) {
          return res
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

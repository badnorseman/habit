import habits from '../data/habits.json'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'
import { createDatabase } from '../utils/createDatabase'
import { createDoc } from '../utils/createDoc'

export const initializeDatabase = () => {
  fetch(dbUrl).then(res => {
    if (res.status !== 200) {
      return createDatabase(dbUrl).then(res => {
        if (res.status === 201) {
          const data = {
            _id: 'habit',
            type: 'habit',
            summary: habits.summary,
            habits: habits.habits
          }
          return createDoc(dbUrl, headers, data).then(res => res.json()).then(doc => {
            if (!doc.ok) { return doc }
          }).catch(err => err)
        }
      }).catch(err => err)
    }
  }).catch(err => err)
}

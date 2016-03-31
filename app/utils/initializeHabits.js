import dbUrl from '../constants/dbUrl'
import habits from '../data/habits.json'
import { createDoc } from '../utils/createDoc'
import { readDoc } from '../utils/readDoc'

export const initializeHabits = () => {
  return readDoc(`${dbUrl}/habit`).then(res => {
    if (res.status !== 201) {
      const data = {
        _id: 'habit',
        type: 'habit',
        summary: habits.summary,
        habits: habits.habits
      }
      return createDoc(dbUrl, data).then(res => res).catch(err => err)
    }
  }).catch(err => err)
}

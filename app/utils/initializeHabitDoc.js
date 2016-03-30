import habits from '../data/habits.json'
import { createDoc } from '../utils/createDoc'
import { readDoc } from '../utils/readDoc'

export const initializeHabitDoc = dbUrl => {
  const url = `${dbUrl}/habit`
  return readDoc(url).then(res => {
    if (res.status !== 201) {
      const data = {
        type: 'habit',
        summary: habits.summary,
        habits: habits.habits
      }
      return createDoc(url, data).then(res => (res)).catch(err => err)
    }
  }).catch(err => err)
}

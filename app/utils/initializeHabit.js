import habits from '../data/habits.json'
import { createDoc } from '../utils/createDoc'

export const initializeHabit = dbUrl => {
  const data = {
    type: 'habit',
    summary: habits.summary,
    habits: habits.habits
  }
  return createDoc(`${dbUrl}/habit`, data).then(res => {
    if (res.status !== 201) { return res }
  }).catch(err => err)
}

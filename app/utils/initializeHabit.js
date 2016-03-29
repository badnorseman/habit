import habits from '../data/habits.json'
import { createDoc } from '../utils/createDoc'

export const initializeHabit = (dbUrl, headers) => {
  const data = {
    _id: 'habit',
    type: 'habit',
    summary: habits.summary,
    habits: habits.habits
  }
  return createDoc(dbUrl, headers, data).then(res => {
    if (res.status !== 201) { return res }
  }).catch(err => err)
}
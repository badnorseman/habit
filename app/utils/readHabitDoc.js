import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'

export const readHabitDoc = () => {
  return readDoc(`${dbUrl}/habit`).then(res => res.json()).then(doc => {
    return doc
  }).catch(err => err)
}
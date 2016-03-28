import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'
import { readDoc } from '../utils/readDoc'

export const readHabits = () => {
  return readDoc(`${dbUrl}/habit`, headers).then(res => res.json()).then(doc => {
    return doc
  }).catch(err => err)
}

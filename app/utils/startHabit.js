import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { updateDoc } from '../utils/updateDoc'

export const startHabit = h => {
  const url = `${dbUrl}/customer`
  const d = new Date()

  return readDoc(url).then(res => res.json()).then(doc => {
    if (doc.ok) {
      Object.assign({}, doc.habits, { [h.title]: { started: d.toJSON() } })
    }
    return updateDoc(url, doc).then(res => res).catch(err => err)
  }).catch(err => err)
}

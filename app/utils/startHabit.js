import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { updateDoc } from '../utils/updateDoc'

export const startHabit = habit => {
  const url = `${dbUrl}/customer`
  const d = new Date()

  return readDoc(url).then(res => {
    if (res.status === 200) {
      res.json().then(doc => {
        doc.habits = Object.assign({}, doc.habits,
          { [habit.title]: { started: d.toJSON() } })
        return updateDoc(url, doc).then(res => res).catch(err => err)
      })
    }
  }).catch(err => err)
}

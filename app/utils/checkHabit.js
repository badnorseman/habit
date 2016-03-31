import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { updateDoc } from '../utils/updateDoc'

export const checkHabit = h => {
  const url = `${dbUrl}/customer`
  const d = new Date()

  return readDoc(url).then(res => {
    if (res.status === 200) {
      res.json().then(doc => {
        doc.habits = Object.assign({}, doc.habits,
          Object.keys(doc.habits).reduce((result, i) => {
            if (i === h.title) {
              doc.habits[i].checked = d.toJSON()
              result[i] = doc.habits[i]
            }
            return result
          }, {}))
        return updateDoc(url, doc).then(res => res).catch(err => err)
      })
    }
  }).catch(err => err)
}

import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { updateDoc } from '../utils/updateDoc'

export const endHabit = h => {
  const url = `${dbUrl}/customer`

  return readDoc(url).then(res => {
    if (res.status === 200) {
      res.json().then(doc => {
        doc.habits = Object.assign({},
          Object.keys(doc.habits).reduce((result, i) => {
            if (i !== h.title) { result[i] = doc.habits[i] }
            return result
          }, {}))
        return updateDoc(url, doc).then(res => res).catch(err => err)
      })
    }
  }).catch(err => err)
}

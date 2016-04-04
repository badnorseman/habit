import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { updateDoc } from '../utils/updateDoc'

const decodeJson = res => res.json()

const checkResponse = res => {
  if (res.error) {
    const err = new Error(res.error)
    err.response = res
    throw err
  } else {
    return res
  }
}

export const endHabit = habit => {
  const url = `${dbUrl}/customer`

  return readDoc(url)
    .then(decodeJson)
    .then(checkResponse)
    .then(doc => {
      doc.habits = Object.assign({},
        Object.keys(doc.habits).reduce((result, i) => {
          if (i !== habit.id) { result[i] = doc.habits[i] }
          return result
        }, {}))
      return doc
    })
    .then(doc => updateDoc(url, doc))
    .then(checkResponse)
    .then(doc => doc)
    .catch(err => err)
}

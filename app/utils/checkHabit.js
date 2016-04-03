import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { updateDoc } from '../utils/updateDoc'
import { addPoints } from '../utils/addPoints'

const json = res => res.json()

const checkResponse = res => {
  if (res.error) {
    const err = new Error(res.error)
    err.response = res
    throw err
  } else {
    return res
  }
}

export const checkHabit = habit => {
  const url = `${dbUrl}/customer`
  const d = new Date()

  return readDoc(url)
    .then(json)
    .then(checkResponse)
    .then(doc => {
      doc.score = addPoints(doc.points, doc.lastChecked)
      doc.habits = Object.assign({}, doc.habits,
        Object.keys(doc.habits).reduce((result, i) => {
          if (i === habit.id) {
            doc.habits[i].lastChecked = d.toJSON()
            result[i] = doc.habits[i]
          }
          return result
        }, {}))
      return doc
    })
    .then(doc => updateDoc(url, doc))
    .then(checkResponse)
    .then(doc => doc)
    .catch(err => err)
}

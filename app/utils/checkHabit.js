import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { updateDoc } from '../utils/updateDoc'
import { getPoints } from '../utils/getPoints'
import { getDaysDiff } from '../utils/getDaysDiff'

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

export const checkHabit = habit => {
  const url = `${dbUrl}/customer`
  const d = new Date()

  return readDoc(url)
    .then(decodeJson)
    .then(checkResponse)
    .then(doc => {
      doc.habits = Object.assign({}, doc.habits,
        Object.keys(doc.habits).reduce((result, i) => {
          if (i === habit.id) {
            const daysDiff = doc.habits[i].lastChecked ? getDaysDiff(doc.habits[i].lastChecked) : 2
            doc.habits[i].score += getPoints(daysDiff)
            doc.habits[i].lastChecked = d.toJSON()
            doc.totalScore += doc.habits[i].score
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

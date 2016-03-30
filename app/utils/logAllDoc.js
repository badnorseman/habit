import dbUrl from '../constants/dbUrl'
import { readAllDoc } from '../utils/readAllDoc'

export const logAllDoc = () => {
  return readAllDoc(dbUrl).then(res => res.json()).then(docs => {
    if (docs.rows) {
      docs.rows.map(row => {
        console.log(row.doc)
      })
    }
  }).catch(err => err)
}

import dbUrl from '../constants/dbUrl'
import { createDoc } from '../utils/createDoc'
import { readDoc } from '../utils/readDoc'

export const initializeCustomer = () => {
  return readDoc(`${dbUrl}/customer`).then(res => {
    if (res.status !== 200) {
      const d = new Date()
      const data = {
        _id: 'customer',
        type: 'customer',
        created: d.toJSON(),
        score: 0,
        habits: {}
      }
      return createDoc(dbUrl, data).then(res => res).catch(err => err)
    }
  }).catch(err => err)
}

import dbUrl from '../constants/dbUrl'
import { updateDoc } from '../utils/updateDoc'

export const updateCustomerDoc = () => {
  const d = new Date()
  const data = {
    _id: 'customer',
    checked: d.toJSON()
  }
  return updateDoc(dbUrl, data).then(res => res.json()).then(doc => {
    return doc
  }).catch(err => err)
}

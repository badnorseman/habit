import { createDoc } from '../utils/createDoc'
import { readDoc } from '../utils/readDoc'

export const initializeCustomerDoc = dbUrl => {
  const url = `${dbUrl}/customer`
  return readDoc(url).then(res => {
    if (res.status !== 200) {
      const d = new Date()
      const data = {
        type: 'customer',
        created: d.toJSON()
      }
      return createDoc(url, data).then(res => (res)).catch(err => err)
    }
  }).catch(err => err)
}

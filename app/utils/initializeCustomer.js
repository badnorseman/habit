import { createDoc } from '../utils/createDoc'

export const initializeCustomer = (dbUrl, headers) => {
  const d = new Date()
  const data = {
    type: 'customer',
    created: d.toJSON()
  }
  return createDoc(dbUrl, headers, data).then(res => {
    if (res.status !== 201) { return res }
  }).catch(err => err)
}

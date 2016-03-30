import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'

export const readCustomerDoc = () => {
  return readDoc(`${dbUrl}/customer`).then(res => res.json()).then(doc => {
    return doc
  }).catch(err => err)
}

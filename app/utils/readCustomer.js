import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'

export const readCustomer = () => {
  return readDoc(`${dbUrl}/customer`).then(res => res.json()).catch(err => err)
}

import dbUrl from '../constants/dbUrl'
import { readDoc } from '../utils/readDoc'
import { deleteDoc } from '../utils/deleteDoc'

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

export const deleteCustomer = () => {
  const url = `${dbUrl}/customer`

  return readDoc(url)
    .then(decodeJson)
    .then(checkResponse)
    .then(doc => deleteDoc(`${url}?rev=${doc._rev}`))
    .catch(err => err)
}

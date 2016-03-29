import headers from '../constants/headers'

export const deleteDoc = (dbUrl, data) => {
  const { _id, _rev } = data
  return fetch(`${dbUrl}/${_id}?rev=${_rev}`, {
    method: 'DELETE',
    headers
  })
}

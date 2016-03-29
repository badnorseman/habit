import headers from '../constants/headers'

export const updateDoc = (dbUrl, data) => {
  const { _id } = data
  return fetch(`${dbUrl}/${_id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  })
}

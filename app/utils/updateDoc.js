import headers from '../constants/headers'

export const updateDoc = (url, data) => {
  return fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  })
}

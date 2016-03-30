import headers from '../constants/headers'

export const deleteDoc = url => {
  return fetch(url, {
    method: 'DELETE',
    headers
  })
}

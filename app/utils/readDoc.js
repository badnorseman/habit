import headers from '../constants/headers'

export const readDoc = url => {
  return fetch(url, {
    method: 'GET',
    headers
  })
}

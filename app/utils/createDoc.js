import headers from '../constants/headers'

export const createDoc = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
}

import headers from '../constants/headers'

export const createDoc = (dbUrl, data) => {
  return fetch(dbUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
}

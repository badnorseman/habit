export const readDoc = (dbUrl, headers) => {
  return fetch(dbUrl, {
    method: 'GET',
    headers
  })
}

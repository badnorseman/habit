export const readDatabase = dbUrl => {
  return fetch(dbUrl, {
    method: 'GET'
  })
}

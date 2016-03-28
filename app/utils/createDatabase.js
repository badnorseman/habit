export const createDatabase = dbUrl => {
  return fetch(dbUrl, {
    method: 'PUT'
  })
}

export const deleteDatabase = dbUrl => {
  return fetch(dbUrl, {
    method: 'DELETE'
  })
}

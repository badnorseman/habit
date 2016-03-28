export const deleteDb = dbUrl => {
  return fetch(dbUrl, {
    method: 'DELETE'
  })
}

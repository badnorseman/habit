export const createDatabase = (databaseUrl) => {
  fetch(databaseUrl).then(response => {
    if (response.status !== 200) {
      return fetch(databaseUrl, { method: 'PUT' })
        .then(response => response.json())
        .then(data => data)
        .catch(e => e)
    }
  }).catch(e => e)
}

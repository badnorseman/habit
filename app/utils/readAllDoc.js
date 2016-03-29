import headers from '../constants/headers'

export const readAllDoc = dbUrl => {
  return fetch(`${dbUrl}/_all_docs?include_docs=true`, {
    method: 'GET',
    headers
  })
}

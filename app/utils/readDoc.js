export const readDoc = (url, headers) => {
  return fetch(url, {
    method: 'GET',
    headers
  })
}

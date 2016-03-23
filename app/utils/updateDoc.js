export const updateDoc = (dbUrl, headers, data) => {
  const { _id } = data
  return fetch(`${dbUrl}/${_id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  })
}

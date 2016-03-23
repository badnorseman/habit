export const deleteDoc = (dbUrl, headers, data) => {
  const { _id, _rev } = data
  return fetch(`${dbUrl}/${_id}?rev=${_rev}`, {
    method: 'DELETE',
    headers
  })
}

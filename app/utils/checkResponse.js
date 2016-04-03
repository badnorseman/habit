export const checkResponse = response => {
  if (response.error) {
    const error = new Error(response.error)
    error.response = response
    throw error
  } else {
    return response
  }
}

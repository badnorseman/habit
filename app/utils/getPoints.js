export const getPoints = (days = 0) => {
  return days === 0 ? 0 : days === 1 ? 110 : 100
}

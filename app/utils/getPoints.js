export const getPoints = (days = 0) => {
  const points = days === 0 ? 0 : days === 1 ? 110 : 100
  return points
}

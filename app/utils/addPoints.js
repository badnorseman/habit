// 1 day in milliseconds = 24 * 3600 * 1000 = 86400000
export const addPoints = (lastChecked) => {
  if (Date.parse(lastChecked)) {
    const today = new Date()
    const diffDays = Math.round(Math.abs(
      (new Date(lastChecked) - today) / 86400000))
    return diffDays === 0 ? 0 : diffDays === 1 ? 110 : 100
  } else {
    return 100
  }
}

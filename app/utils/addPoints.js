export const addPoints = (lastChecked) => {
  if (Date.parse(lastChecked)) {
    const today = new Date()
    const diffDays = Math.round(Math.abs(
      (new Date(lastChecked) - today) / (24 * 3600 * 1000)))
    return diffDays === 0 ? 0 : diffDays === 1 ? 110 : 100
  } else {
    return 100
  }
}

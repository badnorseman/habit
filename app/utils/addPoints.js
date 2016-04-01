export const addPoints = (points = 0, lastChecked) => {
  if (Date.parse(lastChecked)) {
    const today = new Date().getTime()
    const diffDays = Math.round(Math.abs(
      ((new Date(lastChecked).getTime()) - today) / (24 * 3600 * 1000)))
    return diffDays === 0 ? points : diffDays === 1 ? points + (100*1.1) : points + 100
  } else {
    return 100
  }
}

export const getDaysDiff = lastChecked => {
  if (Date.parse(lastChecked)) {
    const today = new Date()
    return Math.round(Math.abs(
      (new Date(lastChecked) - today) / (24 * 3600 * 1000)))
  } else {
    return -1
  }
}

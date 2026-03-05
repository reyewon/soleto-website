// Southampton coordinates
const LAT = 50.9097
const LNG = -1.4044

function toRad(deg: number) {
  return deg * (Math.PI / 180)
}

function toDeg(rad: number) {
  return rad * (180 / Math.PI)
}

export function getSunriseSunset(date: Date = new Date()) {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  )

  // Solar declination
  const declination = 23.45 * Math.sin(toRad((360 / 365) * (dayOfYear - 81)))

  // Hour angle
  const cosHourAngle =
    (Math.cos(toRad(90.833)) - Math.sin(toRad(LAT)) * Math.sin(toRad(declination))) /
    (Math.cos(toRad(LAT)) * Math.cos(toRad(declination)))

  const hourAngle = toDeg(Math.acos(Math.max(-1, Math.min(1, cosHourAngle))))

  // Solar noon (in hours, UTC)
  const solarNoon = 12 - LNG / 15

  const sunriseUTC = solarNoon - hourAngle / 15
  const sunsetUTC = solarNoon + hourAngle / 15

  // Convert to local time (UK is UTC+0 in winter, UTC+1 in summer)
  const isBST = isBritishSummerTime(date)
  const offset = isBST ? 1 : 0

  return {
    sunrise: sunriseUTC + offset,
    sunset: sunsetUTC + offset,
  }
}

function isBritishSummerTime(date: Date): boolean {
  const year = date.getFullYear()
  // BST: last Sunday in March to last Sunday in October
  const marchLast = new Date(year, 2, 31)
  const bstStart = new Date(year, 2, 31 - marchLast.getDay(), 1, 0)
  const octLast = new Date(year, 9, 31)
  const bstEnd = new Date(year, 9, 31 - octLast.getDay(), 1, 0)
  return date >= bstStart && date < bstEnd
}

export function isDaytime(date: Date = new Date()): boolean {
  const { sunrise, sunset } = getSunriseSunset(date)
  const currentHour = date.getHours() + date.getMinutes() / 60
  return currentHour >= sunrise && currentHour < sunset
}

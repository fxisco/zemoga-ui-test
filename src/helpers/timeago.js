/**
 * Inspired from timeago.js:
 * @see https://gist.github.com/pomber/6195066a9258d1fb93bb59c206345b38
 */
const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const MONTH = WEEK * 4
const YEAR = DAY * 365


/**
 * Returns a time ago human friendly string from a date-time string at UTC
 * @param {String} utcDateString A date-time string at UTC
 * @param {Date} currentDate Current date, this param is mostly for testing purposes
 * @returns {String} Time ago human friendly string
 */
export default function getTimeAgo (utcDateString, currentDate = new Date()) {
  const inputDate = new Date(utcDateString)
  const secondsAgo = (Math.round((currentDate - inputDate) / 1000))
  let divisor = null
  let unit = null

  if (secondsAgo < 0) {
    return 'seconds ago'
  } else if (secondsAgo < MINUTE) {
    return secondsAgo + ' seconds ago'
  } else if (secondsAgo < HOUR) {
    [divisor, unit] = [MINUTE, 'minute']
  } else if (secondsAgo < DAY) {
    [divisor, unit] = [HOUR, 'hour']
  } else if (secondsAgo < WEEK) {
    [divisor, unit] = [DAY, 'day']
  } else if (secondsAgo < MONTH) {
    [divisor, unit] = [WEEK, 'week']
  } else if (secondsAgo < YEAR) {
    [divisor, unit] = [MONTH, 'month']
  } else {
    [divisor, unit] = [YEAR, 'year']
  }

  const count = Math.floor(secondsAgo / divisor)
  return `${count} ${unit}${(count > 1) ? 's' : ''} ago`
}
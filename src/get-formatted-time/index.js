export const TIME = {
  year: 365 * 24 * 60 ** 2,
  day: 24 * 60 ** 2,
  hour: 60 ** 2,
  minute: 60,
  second: 1
}
const SPACE = ' '

/**
 * Function that returns a string with formatted time
 * @param {number} date Time to be converted
 * @returns {string}
 */
export function getTime (date) {
  if (date == null) throw new Error('Should receive a date param')
  else if (typeof date !== 'number') throw new Error('Date param should be a number')

  let formattedTime = ''

  for (const [timeString, timeNumber] of Object.entries(TIME)) {
    if (date === 0) break
    if (date >= timeNumber) {
      if ((date - timeNumber) > timeNumber + 1) {
        formattedTime += Math.floor(date / timeNumber) + SPACE + timeString + 's'
        date %= timeNumber
      } else {
        formattedTime += Math.floor(date / timeNumber) + SPACE + timeString
        date %= timeNumber
      }
      if (date >= 1 && formattedTime !== '') {
        formattedTime += ',' + SPACE
      }
    }
  }

  return formattedTime
}

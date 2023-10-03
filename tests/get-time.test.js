import { describe, it, expect } from 'vitest'
import { getTime, TIME } from '../src/get-formatted-time'

describe('Get time as string', () => {
  it('should be a function', () => {
    expect(getTime).toBeTypeOf('function')
  })
  it('should throw an error by not passing any argument', () => {
    expect(() => getTime()).toThrow()
  })
  it('should throw an error by not passing a number', () => {
    expect(() => getTime('asd')).toThrowError()
  })
  it('should return 1 second', () => {
    expect(
      getTime(1)
    ).toBe('1 second')
  })
  it('should return 25 second', () => {
    expect(
      getTime(25)
    ).toBe('25 seconds')
  })
  it('should return 1 minute', () => {
    expect(
      getTime(1 * TIME.minute)
    ).toBe('1 minute')
  })
  it('should return 1 minute, 25 seconds', () => {
    expect(
      getTime((1 * TIME.minute) + 25)
    ).toBe('1 minute, 25 seconds')
  })
  it('should return 24 days, 17 hours, 4 minutes, 23 seconds', () => {
    expect(
      getTime((24 * TIME.day) + (17 * TIME.hour) + (4 * TIME.minute) + (23))
    ).toBe('24 days, 17 hours, 4 minutes, 23 seconds')
  })
  it('should return 17 days, 14 seconds', () => {
    expect(
      getTime((17 * TIME.day) + (14))
    ).toBe('17 days, 14 seconds')
  })
})

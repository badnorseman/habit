import { expect } from 'chai'
import { getDaysDiff } from '../app/utils/getDaysDiff'

describe('utils', function () {
  describe('getDaysDiff', function () {
    it('should return 0 days for undefined', function () {
      expect(getDaysDiff(undefined)).to.equal(-1)
    })
    it('should return 0 days for today', function () {
      const today = new Date().toJSON()
      expect(getDaysDiff(today)).to.equal(0)
    })
    it('should return 1 day for yesterday', function () {
      const yesterday = new Date(new Date() - (24 * 3600 * 1000)).toJSON()
      expect(getDaysDiff(yesterday)).to.equal(1)
    })
    it('should return 2 days for two days ago', function () {
      const twoDays = new Date(new Date() - (24 * 3600 * 1000 * 2)).toJSON()
      expect(getDaysDiff(twoDays)).to.equal(2)
    })
  })
})

import { expect } from 'chai'
import { addPoints } from '../app/utils/addPoints'

describe('utils', function () {
  describe('addPoints', function () {
    it('should return 0 point', function () {
      const today = new Date()
      expect(addPoints(today)).to.equal(0)
    })
    it('should return 110 point', function () {
      const yesterday = new Date(new Date() - (24 * 3600 * 1000))
      expect(addPoints(yesterday)).to.equal(110)
    })
    it('should return 100 point', function () {
      const dayBeforeYesterday = new Date(new Date() - (24 * 3600 * 1000 * 2))
      expect(addPoints(dayBeforeYesterday)).to.equal(100)
    })
  })
})

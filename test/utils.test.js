import { expect } from 'chai'
import { addPoints } from '../app/utils/addPoints'

describe('utils', function () {
  describe('addPoints', function () {
    it('should return 0 point for already checked today', function () {
      const today = new Date().toJSON()
      expect(addPoints(today)).to.equal(0)
    })
    it('should return 110 points for checked yesterday', function () {
      const yesterday = new Date(new Date() - (24 * 3600 * 1000)).toJSON()
      expect(addPoints(yesterday)).to.equal(110)
    })
    it('should return 100 points for checked more than one day ago', function () {
      const dayBeforeYesterday = new Date(new Date() - (24 * 3600 * 1000 * 2)).toJSON()
      expect(addPoints(dayBeforeYesterday)).to.equal(100)
    })
    it('should return 100 points for checked for first time', function () {
      expect(addPoints(undefined)).to.equal(100)
    })

  })
})

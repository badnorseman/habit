import { expect } from 'chai'
import { getPoints } from '../app/utils/getPoints'

describe('utils', function () {
  describe('getPoints', function () {
    it('should return 100 points for -1', function () {
      expect(getPoints(-1)).to.equal(100)
    })
    it('should return 0 points for 0 days', function () {
      expect(getPoints(0)).to.equal(0)
    })
    it('should return 110 points for 1 day', function () {
      expect(getPoints(1)).to.equal(110)
    })
    it('should return 100 points for 2 days', function () {
      expect(getPoints(2)).to.equal(100)
    })
  })
})

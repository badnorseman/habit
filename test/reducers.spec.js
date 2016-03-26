import expect from 'expect'
import userhabits from '../app/reducers/userhabits'

describe('reducers', () => {
  describe('userhabits', () => {
    it('should equal empty state', () => {
      expect(userhabits(undefined, {})).toEqual({})
    })
  })
})

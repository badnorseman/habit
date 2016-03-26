import expect from 'expect'
import userhabits from '../app/reducers/userhabits'

describe('reducers', () => {
  describe('userhabits', () => {
    it('should equal initial state', () => {
      expect(userhabits(undefined, {})).toEqual({})
    })
    it('should create userhabit', () => {
      const before = {}
      const action = {
        type: 'CREATE_USERHABIT',
        userhabit: { "_id": "1", "title": "Some habit" }
      }
      const after = { 1: { "_id": "1", "title": "Some habit" } }
      expect(userhabits(before, action)).toEqual(after)
    })
    it('should delete userhabit', () => {
      const before = { 1: { "_id": "1", "title": "Some habit" } }
      const action = {
        type: 'DELETE_USERHABIT',
        userhabit: { "_id": "1", "title": "Some habit" }
      }
      const after = {}
      expect(userhabits(before, action)).toEqual(after)
    })
  })
})

import expect from 'expect'
import userhabits from '../app/reducers/userhabits'

describe('reducers', () => {
  describe('userhabits', () => {
    it('should be initial state', () => {
      expect(userhabits(undefined, {})).toEqual({})
    })
    it('should create userhabit', () => {
      const before = {}
      const action = {
        type: 'CREATE_USERHABIT',
        userhabit: { '_id': '1', 'title': 'Some title' }
      }
      const after = { 1: { '_id': '1', 'title': 'Some title' } }
      expect(userhabits(before, action)).toEqual(after)
    })
    it('should update userhabit', () => {
      const before = { 1: { '_id': '1', 'title': 'Some title' } }
      const action = {
        type: 'UPDATE_USERHABIT',
        userhabit: { '_id': '1', 'title': 'Another title' }
      }
      const after = { 1: { '_id': '1', 'title': 'Another title' } }
      expect(userhabits(before, action)).toEqual(after)
    })
    it('should delete userhabit', () => {
      const before = { 1: { '_id': '1', 'title': 'Some title' } }
      const action = {
        type: 'DELETE_USERHABIT',
        userhabit: { '_id': '1', 'title': 'Some title' }
      }
      const after = {}
      expect(userhabits(before, action)).toEqual(after)
    })
  })
})

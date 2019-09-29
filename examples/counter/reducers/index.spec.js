import counter from './index'

describe('reducers', () => {
  describe('counter', () => {
    it('should be equal init state', () => {
      expect(counter(undefined, {})).toMatchObject({
        count: 0
      })
    })

    it('should handle INCREMENT action', () => {
      expect(
        counter(undefined, {
          type: 'INCREMENT'
        })
      ).toMatchObject({
        count: 1
      })
    })

    it('should handle DECREMENT action', () => {
      expect(
        counter(
          {
            count: 2
          },
          {
            type: 'DECREMENT'
          }
        )
      ).toMatchObject({
        count: 1
      })
    })
  })
})

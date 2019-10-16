const assert = require('assert')
const Rover = require('../../../src/models/Rover')

describe('Rover', () => {
  describe('Instance', () => {
    it('Should return an instance of Rover with x, y and direction', () => {
      const rover = new Rover(4, 2, 'N')

      assert.equal(rover.x, 4)
      assert.equal(rover.y, 2)
      assert.equal(rover.direction, 'N')
    })
  })
})
const assert = require('assert')
const Plateau = require('../../../src/models/Plateau')

describe('Plateau', () => {
  describe('Instance', () => {
    it('Should return an instance of Plateau with x and y', () => {
      const plateau = new Plateau(7, 9)

      assert.equal(plateau.x, 7)
      assert.equal(plateau.y, 9)
    })
  })
})
const assert = require('assert')
const RoverActionsSetup = require('../../../src/models/RoverActionsSetup')
const leftCoordinates = require('../../../src/mappings/LeftCoordinates')
const rightCoordinates = require('../../../src/mappings/RightCoordinates')
const roverDirectionMove = require('../../../src/mappings/RoverDirectionMove')

describe('RoverActionsSetup', () => {
  describe('Instance', () => {
    it('Should return an instance of RoverActionsSetup with the leftCoordinates, rightCoordinates, roverDirectionMove', () => {
      const setup = new RoverActionsSetup(leftCoordinates, rightCoordinates, roverDirectionMove)

      assert.equal(setup.leftCoordinates, leftCoordinates)
      assert.equal(setup.rightCoordinates, rightCoordinates)
      assert.equal(setup.roverDirectionMove, roverDirectionMove)
    })
  })
})
const assert = require('assert')
const Rover = require('../../../src/models/Rover')
const RoverActionsSetup = require('../../../src/models/RoverActionsSetup')

const RoverActions = require('../../../src/decorators/RoverActions')
const leftCoordinates = require('../../../src/mappings/LeftCoordinates')
const rightCoordinates = require('../../../src/mappings/RightCoordinates')
const roverDirectionMove = require('../../../src/mappings/RoverDirectionMove')

describe('RoverActions', () => {
  describe('#move()', () => {
    it('Should move the rover up, y + 1', () => {
      const rover = new Rover(4, 2, 'N')
      const setup = new RoverActionsSetup(leftCoordinates, rightCoordinates, roverDirectionMove)
      const roverActions = new RoverActions(rover, setup)

      roverActions.move()
      
      assert.equal(rover.x, 4)
      assert.equal(rover.y, 3)
      assert.equal(rover.direction, 'N')
    })
    it('Should move the rover down, y - 1', () => {
      const rover = new Rover(4, 2, 'S')
      const setup = new RoverActionsSetup(leftCoordinates, rightCoordinates, roverDirectionMove)
      const roverActions = new RoverActions(rover, setup)

      roverActions.move()
      
      assert.equal(rover.x, 4)
      assert.equal(rover.y, 1)
      assert.equal(rover.direction, 'S')
    })
  })
})
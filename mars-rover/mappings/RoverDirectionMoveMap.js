const Coordinates = require('./Coordinates')

const RoverDirectionMoveMap = {
  [Coordinates.N]: ['y', 1],
  [Coordinates.S]: ['y', -1],
  [Coordinates.E]: ['x', 1],
  [Coordinates.W]: ['x', -1]
}

module.exports = RoverDirectionMoveMap
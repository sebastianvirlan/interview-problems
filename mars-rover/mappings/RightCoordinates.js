const Coordinates = require('./Coordinates')

const RightCoordinates = {
  [Coordinates.N]: Coordinates.E,
  [Coordinates.S]: Coordinates.W,
  [Coordinates.E]: Coordinates.S,
  [Coordinates.W]: Coordinates.N
}

module.exports = RightCoordinates
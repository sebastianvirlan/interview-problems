const Coordinates = require('./Coordinates')

const LeftCoordinates = {
  [Coordinates.N]: Coordinates.W,
  [Coordinates.S]: Coordinates.E,
  [Coordinates.E]: Coordinates.N,
  [Coordinates.W]: Coordinates.S
}

module.exports = LeftCoordinates
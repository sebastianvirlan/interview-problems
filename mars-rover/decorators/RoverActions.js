class RoverActions {
  constructor(rover, setup) {
    this.rover = rover
    this.setup = setup
  }

  move() {
    const tupple = this.setup.roverDirectionMoveMap[this.rover.direction]
    this.rover[tupple[0]] = this.rover[tupple[0]] + tupple[1]
  }

  right() {
    this.rover.direction = this.setup.rightCoordinates[this.rover.direction]
  }

  left() {
    this.rover.direction = this.setup.leftCoordinates[this.rover.direction]
  }
}

module.exports = RoverActions

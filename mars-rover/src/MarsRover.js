class MarsRover {
  constructor(plateau, roverActions) {
    this.plateau = plateau
    this.roverActions = roverActions
  }

  execute(command) {
    command.forEach((value) => {
      this.roverActions[value]()
    })
  }
}

module.exports = MarsRover

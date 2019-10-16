const RoverActionsMap = require('./mappings/RoverCommandActionsMap')

class RoverCommandParser {
  constructor(command) {
    this.command = this.parse(command)
  }

  parse(command) {
    const commandArray = command.split('')
    return commandArray.map(value => RoverActionsMap[value])
  }
}

module.exports = RoverCommandParser

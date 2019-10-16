// Models
const Plateau = require('./src/models/Plateau')
const Rover = require('./src/models/Rover')
const RoverActionsSetup = require('./src/models/RoverActionsSetup')

// Decorators
const RoverActions = require('./src/decorators/RoverActions')

// Mappings
const Coordinates = require('./src/mappings/Coordinates')
const leftCoordinates = require('./src/mappings/LeftCoordinates')
const rightCoordinates = require('./src/mappings/RightCoordinates')
const roverDirectionMove = require('./src/mappings/RoverDirectionMove')

// src
const RoverCommandParser = require('./src/RoverCommandParser')
const MarsRover = require('./src/MarsRover')

// Setup
const plateau = new Plateau(5, 5)
const roverActionsSetup = new RoverActionsSetup(
  leftCoordinates,
  rightCoordinates,
  roverDirectionMove
)

// Rover 1
const rover = new Rover(1, 2, Coordinates.N)
const roverActions = new RoverActions(rover, roverActionsSetup)

// Rover 1 Command
const commandParser = new RoverCommandParser('LMLMLMLMM')

// Rover 2
const rover2 = new Rover(3, 3, Coordinates.E)
const roverActions2 = new RoverActions(rover2, roverActionsSetup)

// Rover 2 Command
const commandParser2 = new RoverCommandParser('MMRMMRMRRM')

console.log(rover)
const marsRover = new MarsRover(plateau, roverActions)
marsRover.execute(commandParser.command)
console.log(rover)

console.log(rover2)
const jupiterRover = new MarsRover(plateau, roverActions2)
jupiterRover.execute(commandParser2.command)
console.log(rover2)

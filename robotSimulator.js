// Robot Class Definition 
var Robot = /** @class */ (function () {
    function Robot(initialRow, initialCol, initialDirection, tableRows, tableCols) {
        // Directions array for rotating left and right
        this.directions = ['N', 'E', 'S', 'W'];
        // Ensure initial position is within table boundaries
        if (initialRow >= tableRows || initialCol >= tableCols || initialRow < 0 || initialCol < 0) {
            throw new Error('Initial position is out of bounds.');
        }
        this.row = initialRow;
        this.col = initialCol;
        this.direction = initialDirection;
        this.tableRows = tableRows;
        this.tableCols = tableCols;
    }
    // Rotate the robot to the left (counter-clockwise)
    Robot.prototype.rotateLeft = function () {
        var currentIndex = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndex + 3) % 4];
    };
    // Rotate the robot to the right (clockwise)
    Robot.prototype.rotateRight = function () {
        var currentIndex = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndex + 1) % 4];
    };
    // Move the robot forward based on its current direction
    Robot.prototype.moveForward = function () {
        switch (this.direction) {
            case 'N':
                if (this.row > 0)
                    this.row--;
                break;
            case 'E':
                if (this.col < this.tableCols - 1)
                    this.col++;
                break;
            case 'S':
                if (this.row < this.tableRows - 1)
                    this.row++;
                break;
            case 'W':
                if (this.col > 0)
                    this.col--;
                break;
            default:
                throw new Error('Invalid direction.');
        }
    };
    // Process a sequence of commands (e.g., "MRMLM")
    Robot.prototype.executeCommands = function (commands) {
        for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
            var command = commands_1[_i];
            switch (command) {
                case 'M':
                    this.moveForward();
                    break;
                case 'L':
                    this.rotateLeft();
                    break;
                case 'R':
                    this.rotateRight();
                    break;
                default:
                    throw new Error("Unknown command: ".concat(command));
            }
        }
    };
    // Return the robot's current position and direction as a string
    Robot.prototype.getPosition = function () {
        return "".concat(this.row, " ").concat(this.col, " ").concat(this.direction);
    };
    return Robot;
}());
//  Function to Run the Simulation 
function runSimulation(input) {
    var lines = input.trim().split('\n');
    // Extract table dimensions
    var _a = lines[0].split(' ').map(Number), tableRows = _a[0], tableCols = _a[1];
    // Extract initial position and direction
    var _b = lines[1].split(' '), initialRow = _b[0], initialCol = _b[1], initialDirection = _b[2];
    // Extract movement commands
    var commands = lines[2];
    // Create a robot instance and execute commands
    var robot = new Robot(Number(initialRow), Number(initialCol), initialDirection, tableRows, tableCols);
    robot.executeCommands(commands);
    // Return the final position and orientation
    return robot.getPosition();
}
//  Example Usage 
var input = "5 5\n1 2 S\nMRMLM";
console.log(runSimulation(input)); // Expected Output: "3 1 S"
// How to Run the Program 
/*
1. Make sure Node.js and TypeScript are installed.
2. Save this code in a file named "robotSimulator.ts".
3. Open a terminal and go to the folder where the file is saved.
4. Run this command to convert the TypeScript file to JavaScript:
   tsc robotSimulator.ts
5. After that, run the generated JavaScript file with Node.js:
   node robotSimulator.js
6. To try different inputs, edit the "input" variable in the code and run it again.
*/

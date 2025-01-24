

// Robot Class Definition 
class Robot {
  private row: number;
  private col: number;
  private direction: string;
  private readonly tableRows: number;
  private readonly tableCols: number;

  // Directions array for rotating left and right
  private directions: string[] = ['N', 'E', 'S', 'W'];

  constructor(initialRow: number, initialCol: number, initialDirection: string, tableRows: number, tableCols: number) {
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
  private rotateLeft(): void {
    const currentIndex = this.directions.indexOf(this.direction);
    this.direction = this.directions[(currentIndex + 3) % 4];
  }

  // Rotate the robot to the right (clockwise)
  private rotateRight(): void {
    const currentIndex = this.directions.indexOf(this.direction);
    this.direction = this.directions[(currentIndex + 1) % 4];
  }

  // Move the robot forward based on its current direction
  private moveForward(): void {
    switch (this.direction) {
      case 'N':
        if (this.row > 0) this.row--;
        break;
      case 'E':
        if (this.col < this.tableCols - 1) this.col++;
        break;
      case 'S':
        if (this.row < this.tableRows - 1) this.row++;
        break;
      case 'W':
        if (this.col > 0) this.col--;
        break;
      default:
        throw new Error('Invalid direction.');
    }
  }

  // Process a sequence of commands (e.g., "MRMLM")
  public executeCommands(commands: string): void {
    for (const command of commands) {
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
          throw new Error(`Commadn Unknown: ${command}`);
      }
    }
  }

  // Return the robot's current position and direction as a string
  public getPosition(): string {
    return `${this.row} ${this.col} ${this.direction}`;
  }
}

//  Function to Run the Simulation 
function runSimulation(input: string): string {
  const lines = input.trim().split('\n');

  // Extract table dimensions
  const [tableRows, tableCols] = lines[0].split(' ').map(Number);

  // Extract initial position and direction
  const [initialRow, initialCol, initialDirection] = lines[1].split(' ');

  // Extract movement commands
  const commands = lines[2];

  // Create a robot instance and execute commands
  const robot = new Robot(Number(initialRow), Number(initialCol), initialDirection, tableRows, tableCols);
  robot.executeCommands(commands);

  // Return the final position and orientation
  return robot.getPosition();
}

//  Example Usage 
const input = `5 5\n1 2 S\nMRMLM`;
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

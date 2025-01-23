# How to Run the Robot Simulator Using Git

### Steps to Clone and Run the Project

1. **Clone the Repository:**
   Open your terminal and clone the repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Folder:**
   Move into the folder containing the cloned project:

   ```bash
   cd <repository-folder-name>
   ```

3. **Install Node.js and TypeScript:**
   Make sure you have Node.js and TypeScript installed on your system.

   - To check if Node.js is installed, run:
     ```bash
     node -v
     ```
   - To check if TypeScript is installed, run:
     ```bash
     tsc -v
     ```
   - If not installed, download Node.js [here](https://nodejs.org/) and install TypeScript globally:
     ```bash
     npm install -g typescript
     ```

4. **Install Dependencies (if any):**
   If the repository includes a `package.json` file, install the required dependencies:

   ```bash
   npm install
   ```

5. **Compile the TypeScript File:**
   Convert the TypeScript code to JavaScript by running:

   ```bash
   tsc robotSimulator.ts
   ```

   This will generate a file named `robotSimulator.js` in the same folder.

6. **Run the Program:**
   Execute the generated JavaScript file using Node.js:

   ```bash
   node robotSimulator.js
   ```

### Test Cases

#### Test Case 1:
- **Input:**
  ```
  5 5
  1 2 S
  MRMLM
  ```
- **Expected Output:**
  ```
  3 1 S
  ```

#### Test Case 2:
- **Input:**
  ```
  5 5
  0 0 N
  MMRMMLM
  ```
- **Expected Output:**
  ```
  2 1 N
  ```

#### Test Case 3:
- **Input:**
  ```
  4 4
  2 2 E
  MRMRM
  ```
- **Expected Output:**
  ```
  3 3 S
  ```

## Student Table Task
## 📌 Task Overview

This project demonstrates the use of TypeScript with Vanilla JavaScript DOM manipulation.
It involves defining a Student interface, creating student objects, and dynamically rendering them in an HTML table.

📝 Requirements

Write all code in main.ts.

Create an interface Student with:

firstName (string)

lastName (string)

age (number)

location (string)

Create two students and store them inside an array called studentsList.

Using Vanilla JavaScript, render a table in the browser:

Each row should display the first name and location of each student.

Webpack should compile without any TypeScript errors.

All variables must use TypeScript typing wherever possible.

⚙️ Setup Instructions
1. Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

2. Install dependencies
npm install

3. Run the project

To start the development server with hot reload:

npm run start

4. Build the project

To generate the production build:

npm run build

📂 Project Structure
├── dist/             # Compiled output
├── src/
│   ├── main.ts       # Main TypeScript file (write your code here)
├── index.html        # Entry HTML file (table will render here)
├── tsconfig.json     # TypeScript configuration
├── webpack.config.js # Webpack configuration
└── package.json      # Dependencies & scripts

✅ Expected Behavior

On running the project, an HTML page will display a table.

The table will have two rows (one for each student).

Each row will contain:

The first name of the student

The location of the student

Example:

First Name	Location
Alice	New York
Bob	San Diego
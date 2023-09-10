# Poll-Station

Poll-Station is a simple polling system built using React, Node.js, PostgreSQL, and Material UI for styling. It allows users to vote on various options and view the voting results in different graphical formats.

## Features :
- **FrontEnd :**
  - Vite.js : A fast and lightweight frontend build tool and development server.
  
- **BackEnd :**
  -  Node.js : A powerful backend JavaScript runtime.
  
- **Database :**
  - PostgreSQL :  A robust open-source relational database management system.
  
- **Styling :**
  -  Material UI : A popular React UI framework for designing modern and responsive user interfaces.

### Navigation:

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start the Development Server](#start-the-development-server)

### Simple Welcome Page

On the welcome page, users can choose between two options:

1. **Vote:**
   - Users can vote by clicking on this option.
   - A modal is used for voting.
   - Users need to enter their name and voting choice (true/false).
   - They can choose a date with a date picker and specify the number of days.
   - The system checks if the name is already in the database and only allows submission if it's a new name.
   - Toastify is used for displaying alerts.

2. **View Table Data and Graphs:**
   - Users can view a table displaying entered data and various types of graphs.
   - Chart.js is used for creating the graphs.
   - A bar graph represents the overall data.
   - Line graphs are used for different voting choices.
   - The table includes sorting and pagination options using a data grid.

### Libraries Used:
- [Axios](https://github.com/axios/axios): A promise-based HTTP client for making requests.
- [chart.js-2](https://github.com/reactchartjs/react-chartjs-2): A React wrapper for Chart.js, used for creating graphs.
- [day.js](https://github.com/iamkun/dayjs): A minimalist JavaScript library for parsing, validating, manipulating, and displaying dates and times.
- [date-picker](https://github.com/airbnb/react-dates): A date picker component for React.
- [toasty](https://github.com/apvarun/toasty): A library for displaying toast notifications in a React application.
- [express](https://github.com/expressjs/express): A fast, unopinionated, minimalist web framework for Node.js.
- [cors](https://github.com/expressjs/cors): Middleware for handling Cross-Origin Resource Sharing (CORS).
- [node-postgres](https://github.com/brianc/node-postgres): PostgreSQL client for Node.js.
- [nodemon](https://github.com/remy/nodemon): A utility that monitors for changes in your source code and automatically restarts your server.
- [date-fns](https://github.com/date-fns/date-fns): Modern JavaScript date utility library.


## Prerequisites

Before running the app, make sure you have the following installed on your machine:

- Node.js (v12 or above)
- npm (v6 or above)

## Getting Started

### Clone the Repository

1. Clone this repository to your local machine:

   ```bash
   git clone Poll-System


3. Navigate to the project directory:

       cd Client


3. Install the dependencies:

       npm install

4. Start the development server:

       npm run dev

5. Take another terminal:

       cd Server

6. Install the dependencies:

       npm install

7. Start the development server:

       node index.js

**The app should now be running at http://localhost:5173.**

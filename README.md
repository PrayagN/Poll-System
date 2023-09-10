# Poll-Station

Poll-Station is a simple polling system built using React, Node.js, PostgreSQL, and Material UI for styling. It allows users to vote on various options and view the voting results in different graphical formats.

## Features:
- **FrontEnd:**
  - Vite.js: A fast and lightweight frontend build tool and development server.
  
- **BackEnd:** Node.js
  
- **Database:** PostgreSQL
  
- **Styling:** Material UI

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
- Axios
- chart.js-2
- day.js
- date-picker
- toasty

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

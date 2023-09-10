# Poll-Station

  It's  a simple Polling System maid with react and nodejs.
  # Features:
  FrontEnd -> Vite.js
  BackEnd  -> Node.js
  Database -> Postgres
  Styling  -> Material UI

  -Simple Welcome Page There we can take 2 options 
  
  1. We can Vote
     - Here i used modal for vote .
     - Entering name , voting choice we can take true/false .
     - choose Date with Datepicker and also used dayjs.
     - It will check the name from the database and if there is no name then only submit the data.
     - for alert used Toastify.
     
  2. We can see Table Data of entered datas.And also different types of graphs.
     - Here i used Chart.js for all the graphs.
     - Bar graph for overall data
     - Line graphs for different voting Choices.
     - The Table also have sorting,pagination options i used data-grid.
       
  Libraries Used: axios , chart.js-2 , day.js , datePicker , toastify 


# Prerequisites

Before you can run the app, make sure you have the following installed on your machine:

- Node.js (v12 or above)

- npm (v6 or above)
# Getting Started
1. Clone this repository to your local machine:

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

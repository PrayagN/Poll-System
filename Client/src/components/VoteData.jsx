import React from "react";
import Table from "./Table";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function VoteData() {
  return (
    <div>
      <div>
        <Table />
      </div>
      <br />
      <div>
        <div className="button-container" style={{margin:'10px'}}>
          <Link to="/line-chart" style={{margin:'10px'}}>
            <Button variant="contained">Line Chart</Button>
          </Link>
          <Link to="/counts?voting_choice=true" style={{margin:'10px'}}>
            <Button variant="contained">Line Chart for Choice True</Button>
          </Link>
          <Link to="/counts?voting_choice=false" style={{margin:'10px'}}>
            <Button variant="contained">Line Chart for Choice False</Button>
          </Link>
          <Link to="/bar-chart" style={{margin:'10px'}}>
            <Button variant="contained">Bar Chart</Button>
          </Link>
          <Link to="/over-all" style={{margin:'10px'}}>
            <Button variant="contained">OverAll Chart</Button>
          </Link>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            .button-container {
              display: flex;
              flex-direction: column; // For smaller screens, align buttons in a column
              align-items: center; // Center buttons horizontally
            
            }
          }
        `}
      </style>
    </div>
  );
}

export default VoteData;

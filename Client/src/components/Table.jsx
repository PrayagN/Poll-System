import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "sl.No", width: 100 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "voting_choice", headerName: "Voting Choice", width: 150 },
  { field: "casted_at", headerName: "Casted At", width: 150 },
];

function Table() {
  const baseUrl = import.meta.env.VITE_BaseUrl;

  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`${baseUrl}/data`)
      .then((response) => {
        console.log(response);
        setData(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{width:'100%'}}>
        <Typography variant="h4">TABLE DATA</Typography>
        <div style={{display:'flex',justifyContent:'center'}}>
      <hr />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 400,
            maxWidth: "800px", // Adjust the maximum width as needed
            padding: "0 20px",
            position: "relative",
            // filter: 'blur(5px)',
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
          }}
        >
          <DataGrid
            rows={data}
            columns={columns}
            style={{ padding: "0  20px" }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </>
  );
}

export default Table;

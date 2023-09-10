import { Grid, Typography } from "@mui/material";
import React from "react";
import Cards from "./Cards";


function HomePage() {
  return (

<div >
  <div style={{ marginBottom: '16px' }}>
    <Typography variant="h4">Welcome To Polling Station</Typography>
  </div>
  <br />
  <div>
    <Grid container spacing={10}>
      <Grid item xs={12} md={6}>
        <Cards imageUrl={'/Guide-to-the-Philippine-Elections.webp'} button='Vote' />
      </Grid>
      <Grid item xs={12} md={6}>
        <Cards imageUrl={'/shutterstock_1787596061_r9i38n_632x361.webp'} button='Trend Analysis' />
      </Grid>
    </Grid>
  </div>
</div>

  );
}

export default HomePage;

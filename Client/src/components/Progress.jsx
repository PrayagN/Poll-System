import React from "react";
import { CircularProgress } from "@mui/material";
function Progress() {
  return (
    <div>
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      {/* <CircularProgress variant="determinate" value={progress} /> */}
    </div>
  );
}

export default Progress;

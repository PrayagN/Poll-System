import { useState,React} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import VoteModal from "./VoteModal";


function Cards({ imageUrl, button }) {
  const navigate =useNavigate()
  const [isModalOpen,setIsModalOpen] = useState(false)

  const navigateTo=()=>{
    navigate('/data');
  }
  return (
    <Box
      sx={{
        width: "100%",
        // height:'100%',
        display: "inline-block",
        p: 1,
        mx: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        textAlign: "center",
        "@media (max-width: 768px)": {
          width: "90%",
        },
      }}
    >
      <img
        src={imageUrl}
        alt="Your Image"
        style={{ width: "100%", height: "auto" }}
      />

      
        <Button variant="contained" color="primary" style={{ margin: "10px" }} onClick={()=>(button ==='Vote'? setIsModalOpen(true):navigateTo())}>
          {button}
        </Button>
        <VoteModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
      
    </Box>
  );
}
export default Cards;

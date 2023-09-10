import { useState, React } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%", // Make the modal responsive to container width
  maxWidth: "400px", // Limit the maximum width on larger screens
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

function VoteModal({ isOpen, onClose }) {
  const baseUrl = import.meta.env.VITE_BaseUrl;

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [votingChoice, setVotingChoice] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleNameChange = (e) => {
    const newName = e.target.value;

    // Add your validation logic here
    if (newName.trim() === "") {
      setNameError("Name is required");
    } else if (newName.length < 3) {
      setNameError("Name must be at least 3 characters");
    } else {
      setNameError("");
    }

    // Update the name state
    setName(newName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameError) {
      try {
        const response = await axios.post(`${baseUrl}/vote`, {
          name,
          voting_choice: votingChoice,
          casted_at: selectedDate,
        });
        if (response.data.status) {
          toast.success("Successfully updated.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        onClose();
      } catch (error) {
        toast.error(error?.response?.data.error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const currentDate = dayjs();

  const handleDateChange = (newDate) => {
    if (newDate === currentDate) {
      setSelectedDate(currentDate);
    } else {
      setSelectedDate(newDate);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <div style={{ margin: "10px" }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={handleNameChange}
                  error={!!nameError}
                  helperText={nameError}
                  required
                  inputProps={{ style: { textTransform: "capitalize" } }}
                />
              </div>

              <FormControl style={{ margin: "10px", width: "95%" }}>
                <InputLabel id="demo-simple-select-label">Voting</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={votingChoice}
                  label="Voting"
                  onChange={(e) => setVotingChoice(e.target.value)}
                  required
                >
                  <MenuItem value={true}>True</MenuItem>
                  <MenuItem value={false}>False</MenuItem>
                </Select>
              </FormControl>

              <br />
              <div style={{ margin: "10px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(props) => <TextField {...props} />}
                    minDate={currentDate}
                  />
                </LocalizationProvider>
              </div>
              <br />
              <Grid container justifyContent="center">
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default VoteModal;

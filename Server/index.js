const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes

// Enter details
app.post("/vote", async (req, res) => {
  try {
    const { name, voting_choice, casted_at } = req.body;

    // Query the database to check if the name already exists
    const existingRecord = await pool.query("SELECT * FROM votes WHERE name = $1", [name]);

    // If a record with the same name exists, return an error response
    if (existingRecord.rows.length > 0) {
      return res.status(400).json({ error: "Name already exists in the database" });
    }

    // If the name doesn't exist, proceed to insert the new record
    const result = await pool.query(
      "INSERT INTO votes (name, voting_choice, casted_at) VALUES ($1, $2, $3) RETURNING *",
      [name, voting_choice, casted_at]
    );

    res.status(201).json({ status: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error, Please try again later!" });
  }
});

// Get entered details
app.get("/data", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM votes");
    const rows = data.rows.map((row) => {
      // Assuming the date is in the "casted_at" column
      const date = row.casted_at;

      // Adjust the month to be 1-based
      const adjustedMonth = date.getMonth() + 1;

      // Format the date as 'dd-MM-yyyy'
      const formattedDate = `${date.getDate()}-${adjustedMonth}-${date.getFullYear()}`;

      // Create a new object with the adjusted date
      return {
        ...row,
        casted_at: formattedDate,
      };
    });
    res.status(200).json({ result: rows });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "No Data Found" });
  }
});

// Getting voting_choice=true
app.get("/counts", async (req, res) => {
  try {
    const { voting_choice } = req.query;

    const query = `
      SELECT to_char(casted_at, 'YYYY-MM-DD') AS casted_date, COUNT(*) AS vote_count
      FROM votes
      WHERE voting_choice = $1
      GROUP BY casted_date
      ORDER BY casted_date
    `;

    const { rows } = await pool.query(query, [voting_choice]);
    res.status(200).json({ result: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/line-chart", async (req, res) => {
  try {
    const query = `
      SELECT
        to_char(casted_at, 'YYYY-MM-DD') AS casted_date,
        COUNT(*) FILTER (WHERE voting_choice = true) AS vote_count_true,
        COUNT(*) FILTER (WHERE voting_choice = false) AS vote_count_false
      FROM votes
      GROUP BY casted_date
      ORDER BY casted_date;
    `;

    const { rows } = await pool.query(query);
    res.status(200).json({ result: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Overall data
app.get("/over-all", async (req, res) => {
  try {
    const query = `
      SELECT COUNT(*) FROM votes WHERE voting_choice = true
      UNION ALL
      SELECT COUNT(*) FROM votes WHERE voting_choice = false;
    `;

    const { rows } = await pool.query(query);
    res.status(200).json({ result: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started");
});

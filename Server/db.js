const Pool =require('pg').Pool;
require("dotenv").config();

// const pool = new Pool({
//     user:"postgres",
//     password:process.env.password,
//     host:"localhost",
//     port:5432,
//     database:"pollstation"
// })
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })

module.exports = pool
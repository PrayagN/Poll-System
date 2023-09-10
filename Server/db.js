const Pool =require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"prayu123",
    host:"localhost",
    port:5432,
    database:"pollstation"
})

module.exports = pool
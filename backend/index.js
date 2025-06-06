const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});


app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Hello from backend! PostgreSQL time: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd połączenia z bazą danych");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

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

app.get("/init-users-table", async (req, res) => {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        imie VARCHAR(100),
        nazwisko VARCHAR(100),
        email VARCHAR(150) UNIQUE NOT NULL,
        haslo TEXT NOT NULL
      );
    `;
    await pool.query(query);
    res.send("Tabela 'users' została utworzona.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd przy tworzeniu tabeli.");
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

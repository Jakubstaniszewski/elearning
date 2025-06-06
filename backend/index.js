const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://multo.vercel.app",
  credentials: true
}));
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.post("/login", async (req, res) => {
  const { email, haslo } = req.body;

  if (!email || !haslo) {
    return res.status(400).send("Email i hasło są wymagane.");
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).send("Nieprawidłowy email lub hasło.");
    }

    const isMatch = await bcrypt.compare(haslo, user.haslo);
    if (!isMatch) {
      return res.status(400).send("Nieprawidłowy email lub hasło.");
    }

    // Możesz dodać token JWT tutaj w przyszłości

    res.status(200).json({
      message: "Zalogowano pomyślnie",
      user: {
        id: user.id,
        imie: user.imie,
        nazwisko: user.nazwisko,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd serwera.");
  }
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(`Backend działa! ${result.rows[0].now}`);
});

app.get("/init-users-table", async (req, res) => {
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
});

app.post("/users", async (req, res) => {
  const { imie, nazwisko, email, haslo } = req.body;

  if (!imie || !nazwisko || !email || !haslo) {
    return res.status(400).send("Wszystkie pola są wymagane.");
  }

  try {
    const existing = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existing.rows.length > 0) {
      return res.status(400).send("Użytkownik z tym adresem email już istnieje.");
    }

    const hashedPassword = await bcrypt.hash(haslo, 10);

    const result = await pool.query(
      `INSERT INTO users (imie, nazwisko, email, haslo)
       VALUES ($1, $2, $3, $4) RETURNING id, imie, nazwisko, email`,
      [imie, nazwisko, email, hashedPassword]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd serwera.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

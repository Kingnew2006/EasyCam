const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Подключение к PostgreSQL (без .env)
const pool = new Pool({
  user: "postgres",
  host: "localhost", 
  database: "postgres",
  password: "123456789",
  port: 5433,
});

// Эндпоинт для получения списка команд

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});


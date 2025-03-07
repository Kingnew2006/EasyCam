const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

 
const pool = new Pool({
  user: "postgres",
  host: "localhost", 
  database: "postgres",
  password: "123456789",
  port: 5433,
});

 

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
}); 

app.get('/news' , async (req , res) => {
  try {
    const result = await pool.query('Select * from news')
    res.json(result.rows)
  } catch (error) {
    console.log('ошыбка при получений данных', error)
    res.status(500).json({ error: "Ошибка сервера" });
  }
})


const express = require('express');
const { Client } = require('pg');





// Настроим подключение к базе данных Supabase
const connectionString = 'postgresql://postgres.bhgxbdxdaglqecttbfsu:AzJ-qa7-QCg-NNq@aws-0-eu-central-1.pooler.supabase.com:6543/postgres';
const client = new Client({ connectionString });

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());  // Разрешаем все CORS-запросы

// Подключаемся к базе данных
client.connect().then(() => {
  console.log('Подключение к базе данных успешно!');
}).catch((err) => {
  console.error('Ошибка подключения:', err.stack);
});

// Создадим API-эндпоинт для получения данных
app.get('/news', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM news'); // Замените на свою таблицу
    res.json(result.rows); // Отправляем данные в формате JSON
  } catch (err) {
    console.error('Ошибка запроса:', err.stack);
    res.status(500).send('Ошибка сервера');
  }
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});

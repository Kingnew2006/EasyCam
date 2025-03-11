const express = require('express');
const { Client, Pool } = require('pg');
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Настроим подключение к базе данных Supabase
const connectionString = 'postgresql://postgres.bhgxbdxdaglqecttbfsu:AzJ-qa7-QCg-NNq@aws-0-eu-central-1.pooler.supabase.com:6543/postgres';
const client = new Client({ connectionString });


// Настройки Cloudinary
cloudinary.config({
  cloud_name: "dnrgvy2r3",
  api_key: "815674323656927",
  api_secret: "uLRItP_IbYH9q8fqqEqt8c_VDyY"
});


// Настройка хранилища для видео
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
      folder: "videos",
      resource_type: "video"
  }
});
const upload = multer({ storage });






const app = express();
const port = 3000;
const cors = require('cors');
app.use(express.json()); 
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
    const result = await client.query('SELECT * FROM news');
    res.json(result.rows); // Отправляем данные в формате JSON
  } catch (err) {
    console.error('Ошибка запроса:', err.stack);
    res.status(500).send('Ошибка сервера');
  }
}); 

app.post("/add-videos", async (req, res) => {
  try {
    // Запрашиваем все видео из Cloudinary
    const response = await cloudinary.api.resources({
      type: "video",       // Тип ресурса (можно использовать "video" для фильтрации только видео)
      resource_type: "video",  // Указываем, что нас интересуют только видео
      max_results: 100,     // Максимальное количество видео, которое вы хотите получить (по умолчанию 20)
    });

    // Получаем ссылки и заголовки для каждого видео
    const videos = response.resources.map((video) => {
      return {
        title: video.public_id,    // Название видео или его ID
        url: video.url,            // Ссылка на видео
      };
    });

    // Сохраняем видео в базе данных
    for (let video of videos) {
      await client.query(
        "INSERT INTO videos (title, url) VALUES ($1, $2)", 
        [video.title, video.url]
      );
    }

    console.log('✅ Все видео добавлены в базу данных');
    res.json({ message: "Видео успешно добавлены в базу данных", videos });
  } catch (err) {
    console.error("❌ Ошибка при получении видео из Cloudinary:", err);
    res.status(500).json({ error: "Ошибка при получении видео из Cloudinary" });
  }
});


// **2. Получение списка видео**
app.get("/videos", async (req, res) => {
  try {
      const result = await client.query("SELECT * FROM videos");
      res.json(result.rows);
  } catch (err) {
      console.error("Ошибка запроса:", err);
      res.status(500).send("Ошибка сервера");
  }
});




app.get('/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows); // Отправляем данные в формате JSON
  } catch (err) {
    console.error('Ошибка запроса:', err.stack);
    res.status(500).send('Ошибка сервера');
  }
});

app.post('/form', async (req, res) => {
  try {
    const { user, password } = req.body;
    const username = user.replace(/\s/g, '')
    const userpass = password.replace(/\s/g, '')
    if (!user || !password) {
      return res.status(400).json({ error: 'Заполните все поля' });
    } 

    const result = await client.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, userpass]
    );

    res.status(201).json({ message: 'Пользователь добавлен', user: result.rows[0] });
  } catch (err) {
    console.error('Ошибка добавления пользователя:', err.stack);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});



// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер работает ${port}`);
});

setInterval(() => {
  console.log("✅ Сервер активно работает...");
}, 1000 * 60 * 5); // Каждые 5 минут


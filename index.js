// index.js
const express = require('express');
const app = express();

// 建議監聽 127.0.0.1 而不是所有接口
const port = process.env.PORT || 3000; // IISNODE 會提供 PORT
const host = '127.0.0.1';

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
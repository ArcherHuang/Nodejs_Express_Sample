// index.js
const express = require('express');
const app = express();
const port = 3000;

// GET API 路由
// http://localhost:3000/api/hello
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
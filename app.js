const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Ana sayfa');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});

const express = require('express');
const app = express();
const puerto = 1949;

app.get('/', (req, res) => {
  res.send(`Hola mundo desde el puerto ${puerto}`);
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

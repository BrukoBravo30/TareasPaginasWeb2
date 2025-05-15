const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3200;

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '*******',
  database: 'computadora_db'
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
  db.query('SELECT NOW() AS fecha_actual', (err, results) => {
    if (err) {
      return res.status(500).send('Error en la consulta');
    }
    res.send(`Fecha y hora actual: ${results[0].fecha_actual}`);
  });
});
// Prueba Consulta
app.get('/computadoras', (req, res) => {
  db.query('SELECT * FROM computadoras', (err, results) => {
    if (err) {
      return res.status(500).send('Error en la consulta');
    }
    res.json(results);
  });
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports =app;
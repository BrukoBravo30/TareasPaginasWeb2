const express = require('express');
const router = express.Router();
const db = require('../config/db'); // importa la conexión

router.get('/computadoras', (req, res) => {
  db.query('SELECT * FROM computadoras', (err, resultados) => {
    if (err) {
      console.error('Error al obtener computadoras:', err.message);
      return res.status(500).send('Error al obtener computadoras');
    }
    res.json(resultados);
  });
});
//prueba para verificar que se conecto exitosamente a la base de datos
router.get('/test', (req, res) => {
  db.query('SELECT NOW() AS hora', (err, resultados) => {
    if (err) {
      console.error('Error al hacer test de conexión:', err.message);
      return res.status(500).send('Error en la prueba de conexión');
    }
    res.json(resultados);
  });
});

module.exports = router;

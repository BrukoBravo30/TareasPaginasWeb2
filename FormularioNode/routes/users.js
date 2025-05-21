const express = require('express');
const router = express.Router();
const db = require('../config/db'); // importa la conexión

router.get('/computadoras', (req, res) => {
  db.query('SELECT * FROM computadoras', (err, resultados) => {
    if (err) {
      console.error('Error al obtener computadorasss:', err.message);
      return res.status(500).send('Error al obtener computadoras');
    }
    res.json(resultados);
  });
});

module.exports = router;

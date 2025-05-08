const express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('Accediendo a la página de inicio');
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/gato', (req, res) => {
  console.log('Accediendo a la página de gato');
  res.sendFile(path.join(__dirname, '../views/gato.html')); 
});
router.get('/vibora', (req, res) => {
  console.log('Accediendo a la página de vibora');
  res.sendFile(path.join(__dirname, '../views/vibora.html')); 
});
module.exports = router;

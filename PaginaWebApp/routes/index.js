const express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('Accediendo a la página de inicio');
  res.sendFile(path.join(__dirname, '../views/index.html'));
});
router.get('/calculadora', (req, res) => {
  console.log('Accediendo a la página calculadora');
  res.sendFile(path.join(__dirname, '../views/calculadora.html')); 
});
router.get('/qr', (req, res) => {
  console.log('Accediendo a la página calculadora');
  res.sendFile(path.join(__dirname, '../views/qr.html')); 
});


module.exports = router;

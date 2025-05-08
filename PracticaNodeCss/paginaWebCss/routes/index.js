const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Accediendo a la página de inicio');
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/elements', (req, res) => {
  console.log('Accediendo a la página de elementos');
  res.sendFile(path.join(__dirname, '../views/elements.html')); 
});

router.get('/generic', (req, res) => {
  console.log('Accediendo a la página genérica');
  res.sendFile(path.join(__dirname, '../views/generic.html'));  
});


module.exports = router;

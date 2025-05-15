const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Mostrar todas las computadoras y formulario para agregar
router.get('/', (req, res) => {
  db.query('SELECT * FROM computadoras', (err, resultados) => {
    if (err) {
      return res.status(500).send('Error al obtener computadoras');
    }
    res.render('computadoras', { computadoras: resultados });
  });
});

// Agregar computadora
router.post('/agregar', (req, res) => {
  const { marca, modelo } = req.body;
  db.query('INSERT INTO computadoras (marca_computadora, modelo_computadora) VALUES (?, ?)', [marca, modelo], (err) => {
    if (err) {
      return res.status(500).send('Error al agregar computadora');
    }
    res.redirect('/computadoras');
  });
});

// Mostrar formulario para actualizar
router.get('/actualizar/:clave', (req, res) => {
  const clave = req.params.clave;
  db.query('SELECT * FROM computadoras WHERE clave = ?', [clave], (err, resultados) => {
    if (err || resultados.length === 0) {
      return res.status(404).send('Computadora no encontrada');
    }
    res.render('actualizar', { computadora: resultados[0] });
  });
});

// Guardar actualización
router.post('/actualizar/:clave', (req, res) => {
  const id = req.params.clave;
  const { marca, modelo } = req.body;
  db.query('UPDATE computadoras SET marca_computadora = ?, modelo_computadora = ? WHERE clave = ?', [marca, modelo, id], (err) => {
    if (err) {
      return res.status(500).send('Error al actualizar computadora');
    }
    res.redirect('/computadoras');
  });
});

// Mostrar confirmación eliminar
router.get('/eliminar/:clave', (req, res) => {
  const id = req.params.clave;
  db.query('SELECT * FROM computadoras WHERE clave = ?', [id], (err, resultados) => {
    if (err || resultados.length === 0) {
      return res.status(404).send('Computadora no encontrada');
    }
    res.render('eliminar', { computadora: resultados[0] });
  });
});

// Eliminar computadora
router.post('/eliminar/:clave', (req, res) => {
  const id = req.params.clave;
  db.query('DELETE FROM computadoras WHERE clave = ?', [id], (err) => {
    if (err) {
      return res.status(500).send('Error al eliminar computadora');
    }
    res.redirect('/computadoras');
  });
});

module.exports = router;

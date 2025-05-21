const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '198013',
  database: 'computadora_db'
});

conexion.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

module.exports = conexion;

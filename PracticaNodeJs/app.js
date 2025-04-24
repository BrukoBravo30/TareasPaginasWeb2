// Importamos el módulo HTTP que viene incluido en Node.js
const http = require('http');

// Definimos un puerto para el servidor
const port = 3000;

// Creamos el servidor
const server = http.createServer((req, res) => {
    // Establecemos el encabezado de respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Enviamos la respuesta
    res.end('Hola mundo con NODE.js');
});

// Escuchamos el puerto
server.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

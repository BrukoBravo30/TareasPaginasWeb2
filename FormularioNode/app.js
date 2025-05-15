const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

// Configurar Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Para recibir datos de formularios
app.use(express.urlencoded({ extended: true }));

// Rutas (suponiendo que las tienes definidas en './routes/computadoras.js')
const computadorasRouter = require('./routes/computadoras');
app.use('/computadoras', computadorasRouter);

app.listen(3200, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

module.exports = app;
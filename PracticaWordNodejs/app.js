const express = require ('express');
const rutas = require ('./routes/rutas');
const app = express();

const port = 2300;

app.use("/", rutas)

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`);
});
CREATE DATABASE IF NOT EXISTS computadora_db;
USE computadora_db;

CREATE TABLE IF NOT EXISTS computadoras (
    clave INT PRIMARY KEY,
    url_foto TEXT,
    marca_computadora VARCHAR(100),
    modelo_computadora VARCHAR(100),
    precio_pesos INT
);

INSERT INTO computadoras (clave, url_foto, marca_computadora, modelo_computadora, precio_pesos) VALUES
(5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zz7-KGhhRP7yDsRuOp1kbQpk9MvFwNiR0A&s', 'Dell', 'OptimusPrime', 35000),
(6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zz7-KGhhRP7yDsRuOp1kbQpk9MvFwNiR0A&s', 'Hp', 'jamon 270', 3000),
(9, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zz7-KGhhRP7yDsRuOp1kbQpk9MvFwNiR0A&s', 'Dell', 'Optimus Prime', NULL);

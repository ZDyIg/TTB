const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); 

const app = express(); 
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cuest'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos!');
});

app.post('/submit-form', (req, res) => {
    const { nombre, apellido, email, fecha, telefono } = req.body;

    const sql = `INSERT INTO personas (nombre, apellido, email, fecha_nac, telefono) VALUES (?, ?, ?, ?, ?)`;
    const values = [nombre, apellido, email, fecha, telefono];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error al guardar los datos');
        } else {
            console.log('Datos insertados:', results);
            res.send('Datos guardados correctamente');
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/dtsprs.html');
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

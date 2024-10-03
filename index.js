const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;


// Configurar body-parser para manejar los datos POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar CORS para permitir solicitudes desde el frontend
const corsOptions = {
    origin: 'http://localhost:5500',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Configurar conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'formulario_db'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para manejar el envío del formulario
app.post('/submit', (req, res) => {
    const { nombre, empresa, email, telefono, mensaje } = req.body;
    const query = 'INSERT INTO mensajes (nombre, empresa, email, telefono, mensaje) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [nombre, empresa, email, telefono, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar los datos:', err);
            res.status(500).send('Error al enviar el formulario');
        } else {
            res.send('Formulario enviado correctamente');
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});



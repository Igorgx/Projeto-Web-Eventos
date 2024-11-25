const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
<<<<<<< HEAD
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        process.exit(1);
    }
    console.log('Conexão com o banco de dados local estabelecida!');
=======
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
>>>>>>> 5d06feabb1b2fcf3d9147faf84287f2080d04482
});

module.exports = connection;

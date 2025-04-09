const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db', // Nombre del servicio en docker-compose
  user: 'root',
  password: '123456',
  database: 'crud_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;

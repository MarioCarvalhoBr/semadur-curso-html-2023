const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'projeto_final'
});

conexao.connect(err => {
    if (err) throw err;
    console.log('Conectado ao MySQL!');
});

module.exports = conexao;
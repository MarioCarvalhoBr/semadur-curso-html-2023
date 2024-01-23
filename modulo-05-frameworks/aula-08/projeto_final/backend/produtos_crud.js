const conexao = require('./banco');

// Funções CRUD: Create, Read, Update, Delete
/*
# Criar a tabela Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao TEXT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL
);
*/

// Read GetAll
function getProdutos(callback){
    conexao.query('SELECT * FROM produtos', (err, rows) => {
        if (err){
            callback({ erro: 'Erro ao buscar os produtos!' });
            return;
        };
        callback(rows);
    });
};

module.exports = { getProdutos};
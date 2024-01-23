const conexao = require('./banco');

// Funções CRUD: Create, Read, Update, Delete
/*
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    cep VARCHAR(255) NOT NULL,
);
*/

// Read GetAll
function getClientes(callback){
    conexao.query('SELECT * FROM clientes', (err, rows) => {
        if (err){
            callback({ erro: 'Erro ao buscar os clientes!' });
            return;
        };
        callback(rows);
    });
};

// Read One
function getCliente(id, callback){
    conexao.query('SELECT * FROM clientes WHERE id = ?', [id], (err, rows) => {
        if (err){
            callback({ erro: 'Erro ao buscar o cliente!' });
            return;
        };
        // Se não encontrar o cliente
        if (rows.length === 0){
            callback({ erro: 'Cliente não encontrado!' });
            return;
        };
        callback(rows[0]);
    });
};

// Create
function createCliente(cliente, callback){
    // Exe: { nome: 'Pedro', email: 'pedro', rua: 'Rua 1', numero: '123', bairro: 'Centro', cidade: 'São Paulo', estado: 'SP', cep: '12345678'}
    // Exe2: { "nome": "Pedro", "email": "pedro", "rua": "Rua 1", "numero": "123", "bairro": "Centro", "cidade": "São Paulo", "estado": "SP", "cep": "12345678"}
    const { nome, email, rua, numero, bairro, cidade, estado, cep } = cliente;
    conexao.query('INSERT INTO clientes (nome, email, rua, numero, bairro, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [nome, email, rua, numero, bairro, cidade, estado, cep], (err, result) => {
            if (err){
                callback({ erro: 'Erro ao inserir o cliente!' });
                return;
            }
            // Formatar uma mensagem de sucesso
            callback({ id: result.insertId, ...cliente, mensagem: 'Cliente inserido com sucesso!' });
    });
}

// Update
function updateCliente(id, cliente, callback){
    const { nome, email, rua, numero, bairro, cidade, estado, cep } = cliente;
    conexao.query('UPDATE clientes SET nome = ?, email = ?, rua = ?, numero = ?, bairro = ?, cidade = ?, estado = ?, cep = ? WHERE id = ?',
        [nome, email, rua, numero, bairro, cidade, estado, cep, id], (err, result) => {
            if (err){
                callback({ erro: 'Erro ao atualizar o cliente!' });
                return;
            }
            callback({response: 'Cliente atualizado com sucesso!'});
    });
}

// Delete
function deleteCliente(id, callback){
    conexao.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
        if (err){
            callback({ erro: 'Erro ao deletar o cliente!' });
            return;
        }
        callback({response: 'Cliente deletado com sucesso!'});
    });
}

module.exports = { getClientes, getCliente, createCliente, updateCliente, deleteCliente };
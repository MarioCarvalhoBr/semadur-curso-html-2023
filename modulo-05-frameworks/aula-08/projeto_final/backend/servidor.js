/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http usando express e banco de dados mysql
Data: 23/01/2024
E-mail: mario.carvalho@ufms.br
*/
// Bibliotecas
const express = require('express');
const usuarios_crud = require('./usuarios_crud');
const produtos_crud = require('./produtos_crud');
const cursos_crud = require('./cursos_crud');
const cors = require('cors');

// Instanciando o express
const app = express();

// MIDDLEWARES
// Configurando o cors
app.use(cors());

// Configurando o express para receber dados em json
app.use(express.json());

// Middleware: Função que é executada antes de uma rota
// Middleware: É útil para fazer validações, tratamento de erros, verificar se o usuário está logado, etc.
app.use((req, res, next) => {
    // Imprimir no console o método e a url da requisição
    console.log(`Executando Middleware: ${req.method} ${req.url}`);
    next();
});


// CONFIGURAÇÕES
const PORTA = 3000;
const IP = 'localhost';

// Rota GET padrão /
app.get('/', (req, res) => {
    let html = 'API do Sistema de Cadastro de Clientes';
    // Add <a> /usuarios </a> na página inicial
    html += '<br><a href="/clientes">/clientes</a>';
    res.send(html);
});

// Rota GET /clientes
app.get('/clientes', (req, res) => {
    // Se sucesso imprime o resultado e se erro imprime o erro: res.status(500).send({ erro: 'Erro ao buscar os usuários!' });
    usuarios_crud.getClientes(result => {
        if (result.erro){
            res.status(500).send(result);
            return;
        }
        res.json(result);
    })
});

// Rota GET /produtos
app.get('/produtos', (req, res) => {
    // Se sucesso imprime o resultado e se erro imprime o erro: res.status(500).send({ erro: 'Erro ao buscar os usuários!' });
    produtos_crud.getProdutos(result => {
        if (result.erro){
            res.status(500).send(result);
            return;
        }
        res.json(result);
    })
});

// Rota GET /cursos
app.get('/cursos', (req, res) => {
    // Se sucesso imprime o resultado e se erro imprime o erro: res.status(500).send({ erro: 'Erro ao buscar os usuários!' });
    cursos_crud.getCursos(result => {
        if (result.erro){
            res.status(500).send(result);
            return;
        }
        res.json(result);
    })
});

// Rota GET /usuarios/:id
app.get('/clientes/:id', (req, res) => {
    usuarios_crud.getCliente(req.params.id, result => {
        if (result.erro){
            res.status(500).send(result);
            return;
        }
        res.json(result);
    })
});

// Rota POST /usuarios
app.post('/clientes', (req, res) => {
    usuarios_crud.createCliente(req.body, result => {
        if (result.erro){
            res.status(500).send(result);
            return;
        }
        res.json(result);
    })
});

// Rota PUT /usuarios/:id
app.put('/clientes/:id', (req, res) => {
    usuarios_crud.updateCliente(req.params.id, req.body, result => {
        if (result.erro){
            res.status(500).send(result);
            return;
        }
        res.json(result);
    })
});

// Rota DELETE /usuarios/:id
app.delete('/clientes/:id', (req, res) => {
    usuarios_crud.deleteCliente(req.params.id, result => {
        if (result.erro){
            res.status(500).send(result);
            return;
        }
        res.json(result);
    })
});

// Ouvidor
app.listen(PORTA, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORTA}`);
});
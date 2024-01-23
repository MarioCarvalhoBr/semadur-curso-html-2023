# Criar um banco de dados e usar utf8
CREATE DATABASE projeto_final DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

# Usar o banco de dados
USE projeto_final;

# Criar a tabela de clientes
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

# Popular a tabela de clientes com 3 registros
INSERT INTO clientes (nome, email, rua, numero, bairro, cidade, estado, cep) VALUES ("Mário Carvalho", "mario@email.com", "Rua A", "1", "Centro", "Campo Grande", "MS", "11.111-11");
INSERT INTO clientes (nome, email, rua, numero, bairro, cidade, estado, cep) VALUES ("João Silva", "joao@email.com", "Rua B", "2", "Centro", "Rio  de Janeiro", "RJ", "22.222-22");
INSERT INTO clientes (nome, email, rua, numero, bairro, cidade, estado, cep) VALUES ("Maria Souza", "maria@email.com", "Rua C", "3", "Centro", "São Paulo", "SP", "33.333-33");


# Criar a tabela Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao TEXT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL
);

# Popular a tabela de produtos com 3 registros
INSERT INTO produtos (nome, preco, descricao, imagem, quantidade) VALUES ("Produto 1", 10.00, "Descrição do produto 1", "imagem1.jpg", 10);
INSERT INTO produtos (nome, preco, descricao, imagem, quantidade) VALUES ("Produto 2", 20.00, "Descrição do produto 2", "imagem2.jpg", 20);
INSERT INTO produtos (nome, preco, descricao, imagem, quantidade) VALUES ("Produto 3", 30.00, "Descrição do produto 3", "imagem3.jpg", 30);


# Criar a tabela de cursos
CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL
);

# Popular a tabela de cursos com 3 registros
INSERT INTO cursos (nome, descricao, imagem, preco, quantidade) VALUES ("Curso de HTML", "Descrição do curso de HTML", "imagem1.jpg", 10.00, 10);
INSERT INTO cursos (nome, descricao, imagem, preco, quantidade) VALUES ("Curso de CSS", "Descrição do curso de CSS", "imagem2.jpg", 20.00, 20);
INSERT INTO cursos (nome, descricao, imagem, preco, quantidade) VALUES ("Curso de JavaScript", "Descrição do curso de JavaScript", "imagem3.jpg", 30.00, 30);


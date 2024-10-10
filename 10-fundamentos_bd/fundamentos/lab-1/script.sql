CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    numero_celular VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL,
    data_nascimento DATE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enderecos (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id) ON DELETE CASCADE,
    logradouro VARCHAR(255) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    complemento VARCHAR(255),
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(10) NOT NULL
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE subcategorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria_id INT REFERENCES categorias(id) ON DELETE CASCADE
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    modelo VARCHAR(255) NOT NULL,
    fabricante VARCHAR(255),
    preco_base NUMERIC(10, 2) NOT NULL,
    quantidade_disponivel INT NOT NULL,
    subcategoria_id INT REFERENCES subcategorias(id) ON DELETE SET NULL
);

CREATE TABLE numeros_serie (
    id SERIAL PRIMARY KEY,
    numero_serie VARCHAR(255) NOT NULL,
    produto_id INT REFERENCES produtos(id) ON DELETE CASCADE
);

CREATE TABLE compras (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id) ON DELETE CASCADE,
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    desconto_aplicado NUMERIC(5, 2),
    forma_pagamento VARCHAR(50) NOT NULL,
    total NUMERIC(10, 2) NOT NULL,
    endereco_envio_id INT REFERENCES enderecos(id) ON DELETE SET NULL
);

CREATE TABLE itens_compra (
    id SERIAL PRIMARY KEY,
    compra_id INT REFERENCES compras(id) ON DELETE CASCADE,
    produto_id INT REFERENCES produtos(id),
    quantidade INT NOT NULL,
    preco NUMERIC(10, 2) NOT NULL
);

drop database produtos;
create database produtos;
use produtos;

create table vendas(
	id_venda int primary key not null auto_increment,
	nome_produto varchar(50) not null,
	categoria_produto varchar(50) not null,
	quantidade_vendida int not null,
	preco_produto decimal(10,2) not null,
	valor_total decimal(10,2) generated always as (quantidade_vendida * preco_produto) stored,
	data_venda date not null,
	tipo_pagamento varchar(50) not null,
	vendedor varchar(50) not null
)
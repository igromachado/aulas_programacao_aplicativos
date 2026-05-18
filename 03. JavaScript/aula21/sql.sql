create database bosch_log;
use bosch_log;

create table pecas(
	id int primary key auto_increment not null,
    nome_peca varchar(100) not null,
    codigo_peca int not null,
    fornecedor varchar(100) not null,
    quantidade int not null,
    preco_unitario decimal(10,2) not null,
    estoque int not null
)default charset utf8mb4;
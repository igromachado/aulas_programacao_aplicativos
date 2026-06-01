drop database funcionarios_prova;
create database funcionarios_prova;
use funcionarios_prova;

create table funcionarios(
	id_funcionario int primary key not null auto_increment,
    nome varchar(100) not null,
    sobrenome varchar(100) not null,
    setor varchar(100) not null,
    funcao varchar(100) not null
)
drop database achados_perdidos;
create database achados_perdidos;
use achados_perdidos;

create table objeto(
	id_objeto int primary key not null auto_increment,
    descricao varchar(200) not null,
    local_encontro varchar(100) not null,
    data_encontro date not null,
    status_objeto char(20)
)
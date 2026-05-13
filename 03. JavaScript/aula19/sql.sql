create database add_bosch;
use add_bosch;

create table user(
	id int not null auto_increment primary key,
    name varchar(100),
    email varchar(100),
    password varchar(255)
)default charset utf8mb4;
DROP DATABASE IF EXISTS deparments_db;
CREATE DATABASE deparments_db;

USE deparments_db;



CREATE TABLE department (
    id int not null primary key AUTO_INCREMENT,
    name varchar(30)
);

CREATE TABLE role (
    id int not null primary key AUTO_INCREMENT,
    title varchar(30),
    salary DECIMAL(7,2),
    department_id int REFERENCES department(id)
);

    

CREATE TABLE employee (
    id  int not null primary key AUTO_INCREMENT,
    first_name varchar(30),
    last_name varchar(30),
    role_id int REFERENCES role(id),
    manager_id int default 0
);


DROP DATABASE IF EXISTS deparments_db;
CREATE DATABASE deparments_db;

USE deparments_db;



-- CREATE TABLE Department(
--     name VARCHAR(50) NOT NULL,
--     id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY (ID)
-- );

-- CREATE TABLE roles(
--     id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(50),
--     salary INT,
--     deparment_id INT ,
--     FOREIGN KEY (id)
--     REFERENCES Department(ID)
--     ON DELETE SET NULL
-- );
    
-- CREATE TABLE employee(
    
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     role_id INT ,
--     manager_id INT,
--     REFERENCES roles(id)
--     ON DELETE SET NULL
-- );



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


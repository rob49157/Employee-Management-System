DROP DATABASE IF EXISTS deparments_db;
CREATE DATABASE deparments_db;

USE deparments_db;

CREATE TABLE roles(
id INT NOT NULL PRIMARY KEY,
job_title VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
);

CREATE TABLE Department(
    department_name VARCHAR(50) NOT NULL,
    ID INT NOT NULL,
    
    FOREIGN KEY (roles),
    REFERENCES roles(id);
);
CREATE TABLE roles(
    id INT NOT NULL,
    Title VARCHAR(50),
    Salary INT NOT NULL,
    FOREIGN KEY (roles),
    REFERENCES roles(id);
    
CREATE TABLE employee(
    
    ID INT NOT NULL,
    first_names VARCHAR(30),
    last_names VARCHAR(30),
    role_id INT NOT NULL,
    managers_ID INT,
    FOREIGN KEY (roles),
    REFERENCES roles(id)


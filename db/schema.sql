DROP DATABASE IF EXISTS deparments_db;
CREATE DATABASE deparments_db;

USE deparments_db;



CREATE TABLE Department(
    department_name VARCHAR(50) NOT NULL,
    ID INT NOT NULL,
    PRIMARY KEY (ID)
);
CREATE TABLE roles(
    id INT NOT NULL,
    Title VARCHAR(50),
    Salary DECIMAL,
    deparments_id INT NOT NULL,
    FOREIGN KEY (deparments_id),
    REFERENCES Department(id)
);
    
CREATE TABLE employee(
    
    ID INT NOT NULL,
    first_names VARCHAR(30),
    last_names VARCHAR(30),
    role_id INT NOT NULL,
    managers_ID INT,
    FOREIGN KEY (role_id),
    REFERENCES employee(id)
);


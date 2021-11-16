DROP DATABASE IF EXISTS deparments_db;
CREATE DATABASE deparments_db;

USE deparments_db;



CREATE TABLE Department(
    department_name VARCHAR(50) NOT NULL,
    ID int(11) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (ID)
);

CREATE TABLE roles(
    ID INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(50),
    Salary DECIMAL,
    deparments_id INT ,
    FOREIGN KEY (deparments_id)
    REFERENCES Department(ID)
    ON DELETE SET NULL
);
    
CREATE TABLE employee(
    
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_names VARCHAR(30),
    last_names VARCHAR(30),
    role_id INT ,
    managers_ID INT,
    FOREIGN KEY (managers_ID)
    REFERENCES roles(ID)
    ON DELETE SET NULL
);





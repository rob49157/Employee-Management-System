DROP DATABASE IF EXISTS deparments_db;
CREATE DATABASE deparments_db;

USE deparments_db;

CREATE TABLE roles(
id INT NOT NULL PRIMARY KEY,
job_title VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
);

CREATE TABLE employee_data(
    employeedata VARCHAR(50) NOT NULL,
    employee_ids INT NOT NULL,
    first_names VARCHAR(30),
    last_names VARCHAR(30),
    job_titles VARCHAR(30),
    deparments INT,
    salaries INT,
    managers VARCHAR(30),
    FOREIGN KEY (roles),
    REFERENCES roles(id)
);

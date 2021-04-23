-- part4: creating a database

create database company;
use company;

CREATE TABLE employees(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(255) NOT NULL,
 last_name VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 phone_number VARCHAR(255) NULL);
						   
CREATE TABLE projects(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 project_name VARCHAR(255) NOT NULL,
 start_date DATE NULL,
 due_date DATE NULL);
                       
CREATE TABLE employees_projects(
 id INT NOT NULL AUTO_INCREMENT,
 employee_id INT NOT NULL,
 project_id INT NOT NULL,
 FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
 FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
 PRIMARY KEY (id));
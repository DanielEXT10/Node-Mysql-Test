--show databases
SHOW DATABASES;

--to select our database   
use crud_mysql;

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- to show tablas
SHOW TABLES;

describe customer;

CREATE DATABASE data_bienes;

USE data_bienes;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(70) NOT NULL,
    CI VARCHAR(15) NOT NULL
);

CREATE TABLE pedido(
    id INT(11) NOT NULL,
    para VARCHAR(16) NOT NULL,
    seccion VARCHAR(60) NOT NULL,
    al_alm VARCHAR(50) NOT NULL,
    para_uso VARCHAR(70) NOT NULL,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
);
ALTER TABLE users
  ADD PRIMARY KEY (id);

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

INSERT INTO users (id, username, password, fullname) 
  VALUES (1, 'john', 'password1', 'John Carter');

SELECT * FROM users;

-- PEDIDO TABLE
CREATE TABLE pedido (
  id INT(11) NOT NULL,
  codigo INT (20) NOT NULL,
  description TEXT,
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  --articulo VARCHAR(200) ,
  CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id),
);

CREATE TABLE links (
  id INT(11) NOT NULL,
  title VARCHAR(150) NOT NULL,
  url VARCHAR(255) NOT NULL,
  description TEXT, 
  user_id INT(11),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);
ALTER TABLE links
  ADD PRIMARY KEY (id);

ALTER TABLE links
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;

--NO EXIT TABLE
CREATE TABLE no_existe(
    id INT(11) NOT NULL,
    codigo_n INT(20) NOT NULL,
    pedido_c INT(20)NOT NULL,
    us_id INT(11),
    CONSTRAINT fk_user FOREIGN KEY(us_id) REFERENCES users(id),
    CONSTRAINT PED FOREIGN KEY(pedido_c) REFERENCES pedido(codigo)
    //
)
USE `ailton-rafael-silva`;
SET SQL_SAFE_UPDATES = 0;

create table Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- VARCHAR: Strings de N caractéres, Not Null: É obrigatário a por uma informação,
-- Primary key: não deixa repetir informações, por ex. apropriado para ID ou CPF.

-- SHOW DATABASES -- SHOW TABLE = similares a um console.log

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "VitorGirl",
  100,
  "1921-03-26", 
  "male"
);


SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, salary, name from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Juliana Paes";

SELECT id, name, salary from Actor WHERE salary < 500000;

SELECT id, nome from Actor WHERE id = "002" -- o objeto está escrito errado. É name não nome.
;
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

ALTER TABLE Actor ADD sorvete_favorito VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- "ALTER TABLE" Actor DROP COLUMN salary;
-- Serve para remover a coluna de Salário

-- "ALTER TABLE" Actor CHANGE gender sex VARCHAR(6);
--   redeclarar colunas por completo: genero de sexo

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
---------------- EXERCICIO 2 --- ;
-- Atualiza a informação 
UPDATE Actor SET name = "Kézia", salary = 15000, birth_date = "1993-09-06", gender = "female" WHERE id = "005";

---------------- EXERCICIO 3 --- ;
-- Apagarr toda uma linha da tabela
DELETE FROM Actor WHERE name = "Antônio Fagundes";

DELETE FROM Actor
WHERE
	gender = "female" AND
	salary > 250000;

---------------- EXERCICIO 4 --- ;

SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor;

-- Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor;

-- Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(salary) FROM Actor WHERE gender = "female";

-- Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;

---------------- EXERCICIO 5 --- ;
-- O LIMIT, como o próprio nome sugere, 
-- limita a quantidade de dados retornados.
 -- Se quisermos somente 3 atores da tabela:
SELECT * FROM Actor LIMIT 3;

-- Se quisermos os atores em ordem alfabética:
-- A a Z
SELECT * FROM Actor ORDER BY name ASC;
-- Z a A
SELECT * FROM Actor ORDER BY name DESC;

SELECT * FROM Actor ORDER BY name ASC LIMIT 3;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- d) *Faça uma query que retorne os atores com os três maiores salarios*FilmesFilmesActorFilmesFilmesActor
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
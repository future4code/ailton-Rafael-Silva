USE `ailton-rafael-silva`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
		comment TEXT NOT NULL,
		Avaliação FLOAT NOT NULL,
		Filmes_id VARCHAR(255),
    FOREIGN KEY (Filmes_id) REFERENCES Filmes(id)
);

-- ------------------- EXERCICIO 1 ------------;
-- A) FOREIGN KEY, que indica que a
-- propriedade em questão é uma chave estrangeira
-- ● FOREIGN KEY deve sempre se referenciar a uma PRIMARY
-- KEY da outra tabela

DROP TABLE Rating;


DESCRIBE Rating;

SELECT * FROM Rating;

INSERT INTO Rating (id, comment, Avaliação, Filmes_id) 
VALUES (
		"006",
    "Muito bom!",
    7,
		"001"
);

ALTER TABLE Rating DROP COLUMN Avaliação;

SELECT * FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.Filmes_id;

SELECT Filmes.id as Filmes_id, Rating.Avaliação as Rating FROM Filmes 
INNER JOIN Rating  ON Filmes.id = Rating.Filmes_id;


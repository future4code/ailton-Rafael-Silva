USE `ailton-rafael-silva`;

create table Filmes (
    id VARCHAR(255) PRIMARY KEY,
    Título VARCHAR (255) NOT NULL,
    Sinopse TEXT (255),
    Data_de_lançamento DATE NOT NULL,
    Avaliação INT(2) NOT NULL
);

DESCRIBE Filmes;

INSERT INTO Filmes (id, Título, Sinopse, Data_de_lançamento, Avaliação)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
 Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Filmes (id, Título, Sinopse, Data_de_lançamento, Avaliação)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
 A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Filmes (id, Título, Sinopse, Data_de_lançamento, Avaliação)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho,
 que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-27",
8
);
SELECT * FROM Filmes;
SELECT id from Filmes;
SELECT id,  Título from Filmes WHERE id = "002";
SELECT id, Título, Avaliação from Filmes WHERE id = "002";
SELECT id, Título, Avaliação from Filmes WHERE Avaliação > 7;
SELECT * FROM Filmes
WHERE Título LIKE "%Fosse%";
SELECT * FROM Filmes
WHERE Título LIKE "%TERMO DE BUSCA%" OR
      Sinopse LIKE "%TERMO DE BUSCA%";
SELECT * FROM Filmes 
WHERE Data_de_lançamento < "2017-11-27";
SELECT * FROM Filmes
WHERE Data_de_lançamento < "2020-05-04" AND 
      (Título LIKE "%Dona%" OR
      Sinopse LIKE "%vida%") AND Avaliação > 7;
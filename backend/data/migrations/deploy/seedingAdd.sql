-- Deploy ocrypto:seedingAdd to pg

BEGIN;


INSERT INTO "user"(pseudo, email, password) VALUES
('hugo', 'hugo@outlook.fr', 'azerty'),
('quentin', 'quentin@hotmail.fr', '123456');

INSERT INTO article(name, author, abstract) VALUES
('btc info', 'jean Raconte', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');

INSERT INTO lexicon(name, abstract)VALUES
('wallet','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s');

INSERT INTO "level"(name)VALUES
('intermediate');

COMMIT;

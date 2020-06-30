USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ("rodeo burger", true), ("whopper", false), ("butter burger", true);

SELECT * FROM burgers;

INSERT INTO burgers (burger_name) VALUES ('Baconator');

UPDATE burgers SET burger_name = 'Rodeo Burger' WHERE id=3;

UPDATE burgers SET devoured = true WHERE id=5;
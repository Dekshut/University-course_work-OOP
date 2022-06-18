--Для заполнения базы данными
insert into colors values
(default,'#FF0000','Red'),
(default,'#FFFF00','Yellow'),
(default,'#0000FF','Blue'),
(default,'#000000','Black'),
(default,'#FFFFFF','White');

insert into categories values
(default,'T-Shirts'),
(default,'Srirts'),
(default,'Hoodies'),
(default,'Sweaters'),
(default,'Jackets');

insert into products values 
(default, 'url/dkdkjed', 'Long Fit Black T-shirt', 'Long, crew-neck T-shirt in soft jersey with a rounded hem.', '12.99' , 'm', 'XS,S,M,L', 4, 1);

insert into users values 
-- Для авторизации:
-- email: role@gmail.com 
-- password: role
(default, 'user@gmail.com', '$2a$10$GJsSveLkMmft6X0eynpj0OiZfSOPdWbiRLiRDOCi66TiuenUtOgYG', 'false'),
(default, 'admin@gmail.com', '$2a$10$/LsJjVx7eK5dBiHzLqbPU.GgLv4gUzmd9UyaFUTYhIusfHWvKJYdu', 'true');

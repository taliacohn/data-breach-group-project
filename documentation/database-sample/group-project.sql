-- create schema group_project_store;

-- create table users(
-- id int not null primary key auto_increment,
-- email varchar(50) not null,
-- username varchar(30),
-- password varchar(60),
-- phone varchar(20));

-- create table orders(
-- id int not null primary key auto_increment,
-- user_id int not null,
-- foreign key(user_id) references users(id),
-- product_name varchar(100) not null,
-- order_date date not null,
-- total_price decimal(15,3) not null,
-- quantity int not null,
-- unit_price decimal(10, 3) not null);

-- insert into users values(1, 'test@test.com', null, null, '+972321231213'); 
-- insert into users values(2, 'test2@test.com', null, null, '+972321231214'); 
-- insert into orders values(1, 1, 'Bananas', curdate(), 27.8, 10, 2.78); 
-- insert into orders values(2, 2, 'Meat', curdate(), 13.9, 5, 2.78); 
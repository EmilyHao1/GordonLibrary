CREATE TABLE books (
	bookid int PRIMARY KEY,    
 	isbn varchar(255),                                                             
 	title varchar(255),
 	authors varchar(255),                                                                                                                                                                              
 	cover varchar(255),
 	location varchar(255)
 );

CREATE TABLE users (
	userid int PRIMARY KEY,
	type varchar(255),                                                                                                                                                                                  
 	name varchar(255),                                                             
 	email varchar(255),
 	password varchar(255)
 );

CREATE TABLE borrowaction (
	borrowid int PRIMARY KEY,    
 	bookid int,                                                             
 	userid int,
 	checkin timestamp,                                                                                                                                                                              
 	checkout timestamp
 );

INSERT INTO books VALUES(1, '9781597226769','The Great Gatsby','F. Scott Fitzgerald','https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg', 'third-A-1');
INSERT INTO books VALUES(2, '9780201821369','Languages and Machines','Thomas A. Sudkamp','http://t2.gstatic.com/images?q=tbn:ANd9GcS2COgRUmvPnqEu_XVsXZkWuFFqyCbgRSHqZEctzOKPz6_CmyeQ', 'third-A-2');
INSERT INTO books VALUES(3, '9781451686647','The Passenger','Lisa Lutz','http://t1.gstatic.com/images?q=tbn:ANd9GcQaOzMU4gxUKNZ1oBjGme1eMk2W-9b1bGta-jC4hu-R0fNvWcHF', 'third-B-12');

INSERT INTO users VALUES(1,'Student','Ryan Gosling', 'rgosling@wpi.edu','123456');
INSERT INTO users VALUES(2,'Teacher','Lane Harrison','lane@cs.wpi.edu ','654321');
INSERT INTO users VALUES(3,'Staff','Anna Gold','akgold@wpi.edu','000000');

INSERT INTO borrowaction VALUES(1,3,1,'2017-6-19 10:23:54','2017-6-30 9:21:50');
INSERT INTO borrowaction VALUES(2,2,1,'2017-8-1 13:23:54','2017-8-19 10:23:54');
INSERT INTO borrowaction VALUES(3,2,2,'2017-7-19 15:28:38','2017-7-31 9:19:01');

SELECT * FROM books;
--  bookid |     isbn      |         title          |       authors       |                                            cover                                            |  location  
-- --------+---------------+------------------------+---------------------+---------------------------------------------------------------------------------------------+------------
--       1 | 9781597226769 | The Great Gatsby       | F. Scott Fitzgerald | https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg               | third-A-1
--       2 | 9780201821369 | Languages and Machines | Thomas A. Sudkamp   | http://t2.gstatic.com/images?q=tbn:ANd9GcS2COgRUmvPnqEu_XVsXZkWuFFqyCbgRSHqZEctzOKPz6_CmyeQ | third-A-2
--       3 | 9781451686647 | The Passenger          | Lisa Lutz           | http://t1.gstatic.com/images?q=tbn:ANd9GcQaOzMU4gxUKNZ1oBjGme1eMk2W-9b1bGta-jC4hu-R0fNvWcHF | third-B-12
SELECT * FROM users;
--        userid |  type   |     name      |      email       | password 
-- --------+---------+---------------+------------------+----------
--       1 | Student | Ryan Gosling  | rgosling@wpi.edu | 123456
--       2 | Teacher | Lane Harrison | lane@cs.wpi.edu  | 654321
--       3 | Staff   | Anna Gold     | akgold@wpi.edu   | 000000
SELECT * FROM borrowaction;
--  borrowid | bookid | userid |       checkin       |      checkout       
-- ----------+--------+--------+---------------------+---------------------
--         1 |      3 |      1 | 2017-06-19 10:23:54 | 2017-06-30 09:21:50
--         2 |      2 |      1 | 2017-08-01 13:23:54 | 2017-08-19 10:23:54
--         3 |      2 |      2 | 2017-07-19 15:28:38 | 2017-07-31 09:19:01






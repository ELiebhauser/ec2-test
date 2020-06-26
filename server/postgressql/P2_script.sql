create table TICKET_STATUS (
	TID INTEGER primary key,
	ticket_status VARCHAR(8)
);

create table USERS (
	UID INTEGER generated always as identity primary key,
	user_type INTEGER,
	username VARCHAR(50) unique,
	userpass VARCHAR(100),
	hash VARCHAR,
	salt VARCHAR,
	user_img VARCHAR,
	firstname VARCHAR(100),
	lastname VARCHAR(100),
	email VARCHAR(100) unique,
	rating_sigma DECIMAL,
	times_rated INTEGER
);

create table CARDS (
	card_ID INTEGER generated always as identity primary key,
	ticket_status INTEGER references TICKET_STATUS (TID),
	user_ID INTEGER references USERS (UID),
	admin_ID INTEGER references USERS (UID),
	entry_time TIMESTAMP,
	title VARCHAR(100),
	message VARCHAR(1500)
);

create table REPLIES (
	CID INTEGER generated always as identity primary key,
	TPID INTEGER references CARDS (card_ID),
	user_ID INTEGER references USERS (UID),
	entry_time TIMESTAMP,
	replies VARCHAR(1500)
);

grant usage on schema public to p2_admin;
grant select, update, insert on all tables in schema public to p2_admin;

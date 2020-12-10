CREATE TABLE POSTS(
   id INTEGER PRIMARY KEY   AUTOINCREMENT,
   title           TEXT    NOT NULL,
   content         TEXT
);

INSERT INTO POSTS (title, content)
VALUES ('hello world', 'hello');

INSERT INTO POSTS (title, content)
VALUES ('my travel in the land of unicorns', 'unicorns are cool');

CREATE TABLE USERS(
    id INTEGER PRIMARY KEY   AUTOINCREMENT,
    username           TEXT    NOT NULL,
    password        TEXT    NOT NULL
);

INSERT INTO USERS (username, password)
VALUES ('admin (this is actually a username)', 'admin123 (and this is a un-hashed password!)');

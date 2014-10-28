-- name: create-users-table!
CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password_digest VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

-- name: create-stories-table!
CREATE TABLE stories (
  id int(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  score int(11) DEFAULT 0,
  url VARCHAR(255),
  user_id int(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- name: create-comments-table!
CREATE TABLE comments (
  id int(11) NOT NULL AUTO_INCREMENT,
  content TEXT NOT NULL,
  score int(11) DEFAULT 0,
  user_id int(11) NOT NULL,
  story_id int(11),
  comment_id int(11),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (story_id) REFERENCES stories(id),
  FOREIGN KEY (comment_id) REFERENCES comments(id)
);

-- name: drop-users-table!
DROP TABLE users;

--name: drop-stories-table!
DROP TABLE stories;

--name: drop-comments-table!
DROP TABLE comments;

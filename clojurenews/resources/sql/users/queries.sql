-- name: all
SELECT id, username
FROM users;

-- name: all-with-limit
SELECT id, username
FROM users
LIMIT :n;

-- name: find
SELECT id, username
FROM users
WHERE id = :id;

-- name: find-by-username
SELECT id, username
FROM users
WHERE username = :username;

-- name: create!
INSERT INTO users (username, password_digest)
VALUES (:username, :password);

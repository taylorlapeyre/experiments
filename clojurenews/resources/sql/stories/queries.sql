-- name: find
SELECT id, title, url, score, user_id
FROM stories
WHERE id = :id;

-- name: all
SELECT id, title, url, score, user_id
FROM stories;

-- name: all-with-limit
SELECT id, title, url, score, user_id
FROM stories
LIMIT :n;

-- name: create!
INSERT INTO stories (title, url, user_id)
VALUES (:title, :url, :user_id);

-- name: find-by-user
SELECT id, title, url, score, user_id
FROM stories
WHERE user_id = :user_id;

-- name: all-with-user
SELECT id, title, url, score, user_id, users.username user
FROM stories
JOIN users ON (users.id = user_id);

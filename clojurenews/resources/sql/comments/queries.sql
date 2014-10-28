-- name: find-by-comment-id
SELECT id, content, user_id, comment_id, story_id
FROM comments
WHERE comment_id = :comment_id;

-- name: find
SELECT id, content, user_id, comment_id, story_id
FROM comments
WHERE id = :id;

-- name: all
SELECT id, content, user_id, comment_id, story_id
FROM comments;

-- name: create!
INSERT INTO comments (content, user_id, comment_id, story_id)
VALUES (:content, :user_id, :comment_id, :story_id);

-- name: find-by-user
SELECT id, content, user_id, comment_id, story_id
FROM comments
WHERE user_id = :user_id;

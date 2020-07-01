const { pool } = require('./db-connector');

const getAllPosts = () => {
    return (
        pool.query(`
            SELECT id, title, brief, timestamp FROM posts ORDER BY timestamp;
        `)
    )
};

const createPost = ({ title, brief, detailed }) => {
    return (
        pool.query(
            'INSERT INTO posts(title, brief, detailed) VALUES($1, $2, $3) RETURNING *',
            [title, brief, detailed, , new Date()]
        )
    )
};

const getPostById = (id) => {
    return (
        pool.query(`
            SELECT * FROM posts WHERE id=$1;
        `, [ id ])
    )
};

const deletePostById = (id) => {
    return (
        pool.query(`
            DELETE FROM posts WHERE id=$1;
        `, [ id ])
    )
};

const updatePostById = (id, { title, brief, detailed } = {}) => {
    if (title || brief || detailed) {
        return pool.query(`
            UPDATE posts
            SET title=$1, brief=$2, detailed=$3
            WHERE id=$4;
        `, [ title, brief, detailed, id ])
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePostById,
    createPost,
    deletePostById,
};
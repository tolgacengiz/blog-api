const { pool } = require('./db-connector');

const getAllPosts = () => {
    return (
        pool.query(`
            SELECT * FROM posts;
        `)
    )
};

const createPost = ({ title, brief, detailed }) => {
    return (
        pool.query(
            'INSERT INTO posts(title, brief, detailed) VALUES($1, $2, $3) RETURNING *',
            [title, brief, detailed]
        )
    )
};

const getPostById = (id) => {
    return (
        pool.query(`
            SELECT * FROM posts WHERE id=${id};
        `)
    )
};

const deletePostById = (id) => {
    return (
        pool.query(`
            DELETE FROM posts WHERE id=${id};
        `)
    )
};

const updatePostById = (id, { title, brief, detailed } = {}) => {
    if (title || brief || detailed) {
        let setStatement = 'SET ';

        if (title) {
            setStatement += `title='${title}', `
        }

        if (brief) {
            setStatement += `brief='${brief}', `
        }

        if (detailed) {
            setStatement += `detailed='${detailed}', `
        }

        setStatement = setStatement.replace(/,\s$/, '');

        return pool.query(`
            UPDATE posts
            ${setStatement}
            WHERE id=${id};
        `)
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePostById,
    createPost,
    deletePostById,
};
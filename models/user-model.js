const { pool } = require('./db-connector');


const getUserByUsername = (username) => {
    return (
        pool.query(`
            SELECT * FROM users WHERE username='${username}';
        `)
    )
};


module.exports = {
    getUserByUsername,
};
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_course',
    password: 'T0rta@s@marmaladi7'
});

module.exports = pool.promise();

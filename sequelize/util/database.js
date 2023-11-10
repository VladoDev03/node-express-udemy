const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node_course',
    'root',
    'T0rta@s@marmaladi7',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;

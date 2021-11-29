const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const sequelize = new Sequelize(config.database.db, config.database.username, config.database.password, {
    dialect: 'mysql', 
    host: 'localhost', 
    define: {
        timestamps: false,
        freezeTableName: true
      }
});
 
module.exports = sequelize;
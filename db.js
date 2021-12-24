const Sequelize = require('sequelize');

// create db
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

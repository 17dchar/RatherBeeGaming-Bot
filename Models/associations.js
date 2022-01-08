const { Games } = require('./game.js');
const { Ratings } = require('./rating.js');
const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

Games.hasMany(Ratings);
Ratings.belongsTo(Games);
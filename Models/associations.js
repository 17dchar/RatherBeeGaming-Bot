/*const { Game } = require('./game.js');
const { Rating } = require('./rating.js');
const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

Game.hasMany(Rating, {
	sourceKey: 'name',
	foreignKey: `gameName`
});
Rating.belongsTo(Game);
*/
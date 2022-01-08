const { Games } = require('./game.js');

const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const Ratings = sequelize.define('ratings', {
    user: {
        type: Sequelize.TEXT,
        unique: true
    },
    rated: {
        type: Sequelize.FLOAT
    },
    gameId: {
        type: Sequelize.INTEGER
    }
});

Ratings.sync({ alter: true });
exports.Ratings = Ratings;
const { Games } = require('./game.js');

const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const ratings = sequelize.define('ratings', {
    user: {
        type: Sequelize.TEXT,
        unique: true,
    },
    rating: Sequelize.FLOAT
});

ratings.sync();
exports.ratings = ratings;
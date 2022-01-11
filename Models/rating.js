const { Games } = require('./game.js');

const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const Ratings = sequelize.define('ratings', {
    user: {
        type: Sequelize.TEXT,
    },
    rated: {
        type: Sequelize.FLOAT
    },
    gameName: {
        type: Sequelize.TEXT
    }
}, {timestamps: false});

Ratings.sync({ force: true });
exports.Ratings = Ratings;
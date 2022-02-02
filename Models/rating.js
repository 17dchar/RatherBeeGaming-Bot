const { Games } = require('./game.js');

const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const Rating = sequelize.define('rating', {
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

Rating.sync({ force: true });
exports.Rating = Rating;
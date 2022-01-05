const { UserRatings } = require('./ratings.js');

const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const Games = sequelize.define('games', {
    name: {
        type: Sequelize.TEXT,
        unique: true,
    },
    description: Sequelize.TEXT,
    price: Sequelize.FLOAT,
    aveRating: Sequelize.FLOAT,
    numRatings: Sequelize.INTEGER
});

Games.sync();
exports.Games = Games;
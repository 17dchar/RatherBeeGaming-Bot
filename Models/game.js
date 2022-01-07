const { Rating } = require('./rating');

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
});

Games.sync();
exports.Games = Games;
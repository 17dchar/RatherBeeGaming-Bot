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
    price: Sequelize.FLOAT
}, {timestamps: false});

Games.sync({ force: true });
exports.Games = Games;
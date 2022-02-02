const { Rating } = require('./rating');

const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const Game = sequelize.define('game', {
    name: {
        type: Sequelize.TEXT,
        unique: true,
    },
    description: Sequelize.TEXT,
    price: Sequelize.FLOAT
}, {timestamps: false});

Game.sync({ force: true });
exports.Game = Game;
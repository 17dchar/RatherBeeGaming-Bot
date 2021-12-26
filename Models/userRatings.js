const { Games } = require('./game.js');

const db = require('../db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const UserRatings = sequelize.define('userRatings', {
    game: {
        type: Sequelize.TEXT,
        unique: true,
    },
    user: {
        type: Sequelize.TEXT,
        unique: true,
    },
    rating: Sequelize.FLOAT
});

UserRatings.belongsTo(Games);
UserRatings.sync();
exports.UserRatings = UserRatings;
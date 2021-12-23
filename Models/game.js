const Sequelize = require('sequelize');

const Games = Sequelize.define('games', {
    name: {
        type: Sequelize.type,
        unique: true,
    },
    description: Sequelize.TEXT,
    price: Sequelize.FLOAT,
    aveRating: Sequelize.FLOAT,
    numRatings: Sequelize.INTEGER
});

exports.Games = Games;
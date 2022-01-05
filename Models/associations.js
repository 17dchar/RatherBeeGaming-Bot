const { Games } = require('./game.js');
const { ratings } = require('./ratings.js');

Games.hasMany(ratings);
ratings.belongsTo(Games);
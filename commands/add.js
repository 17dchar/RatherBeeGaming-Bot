const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require("discord.js");
const { Games } = require('../Models/game');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Add a game.')
        .addStringOption((option) => 
            option
                .setName("game")
                .setDescription("game to be added")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("description")
                .setDescription("brief description of game")
        )
        .addStringOption((option) =>
            option
                .setName("price")
                .setDescription("price of the game (exclude $)")
        ),

	async execute(interaction) {
        const gameName = interaction.options.getString("game");
        const gameDesc = interaction.options.getString("description");
        const gamePrice = interaction.options.getString("price");

        try{
            const game = Games.create({
                name: gameName,
                description: gameDesc,
                price: gamePrice,
                aveRating: 0.0,
                numRatings: 0,
            })
        }
        catch(error){
            if (error.name === 'SequelizeUniqueConstraintError'){
                return interaction.reply('That game already exists.');
            }
            return interaction.reply('There was an error while executing this command.');
        }

		await interaction.reply(`${gameName} successfully added.`);
	},
};
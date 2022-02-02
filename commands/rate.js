const { SlashCommandBuilder } = require('@discordjs/builders');
const { Game } = require('../Models/game');
const { Rating } = require('../Models/rating');
const db = require('../db.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rate')
		.setDescription('Rate a game.')
        .addStringOption((option) => 
            option
                .setName('game')
                .setDescription('game to be added')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('rating')
                .setDescription('Your rating')
                .setRequired(true)
        ),

	async execute(interaction) {
        const gName = interaction.options.getString('game');
        const rating = interaction.options.getString('rating');
        const userID = interaction.member.user.id;
        const userName = interaction.member.user.username;

        await Rating.create({user: userID, rated: rating, gameName: gName});
        await interaction.reply(`${gName} successfully rated as: ${rating}`);

	}
};
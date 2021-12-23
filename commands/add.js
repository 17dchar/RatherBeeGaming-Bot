const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Add a game.')
        .addStringOption((option) => 
            option
                .setName("game")
                .setDescription("game to be added")
                .setRequired(true)
        ),

	async execute(interaction) {
        const messageToSend = interaction.options.getString("game");
		await interaction.reply(messageToSend);
	},
};
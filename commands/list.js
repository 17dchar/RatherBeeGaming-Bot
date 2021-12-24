const { SlashCommandBuilder } = require('@discordjs/builders');
const { Games } = require('../Models/game');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('list')
		.setDescription('List all recorded games.'),

        async execute(interaction) {
            const gameList = await Games.findAll({ attributes: ['name']});
            const gameString = gameList.map(g => g.name).join('\n') || 'No games found.';

            return interaction.reply(`__**Games:**__\n>>> ${gameString}`);
        }
}
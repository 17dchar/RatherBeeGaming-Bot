const { SlashCommandBuilder } = require('@discordjs/builders');
const { Game } = require('../Models/game');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('list')
		.setDescription('List all recorded games.'),

        async execute(interaction) {
            const gameList = await Game.findAll({ attributes: ['name']});
            const gameString = gameList.map(g => g.name).join('\n') || 'No games found.';

            return interaction.reply(`__**Games:**__\n>>> ${gameString}`);
        }
}
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Game } = require('../Models/game');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('List all recorded games.')
        .addStringOption((option) =>
            option
                .setName('name')
                .setDescription('What game do you want info on?')
                .setRequired(true)
        ),

        async execute(interaction) {
            const gameName = interaction.options.getString('name');
            const game = await Game.findOne({ where: { name: gameName } });
            
            let infoString = `__**${game.get('name')}**__\n`;

            // check for description
            if(game.get('description') == null) {
                infoString = infoString + `>>> Description: not yet added\n`;
            }
            else {
                infoString = infoString + `>>> Description: ${game.get('description')}\n`;
            }

            // check for price
            if(game.get('price') == null) {
                infoString = infoString + `Price: not yet added\n`;
            }
            else {
                infoString = infoString + `Price: $${game.get('price')}\n`;
            }

            await interaction.reply(infoString);
        }
}
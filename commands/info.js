const { SlashCommandBuilder } = require('@discordjs/builders');
const { Games } = require('../Models/game');

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
            const game = await Games.findOne({ where: { name: gameName } });
            
            let infoString = `__**${game.get('name')}**__\n`;

            // check for description
            if(game.get('description') != 'null') {
                infoString = infoString + `>>> Description: ${game.get('description')}\n`;
            }
            else {
                infoString = infoString + `>>> Description not yet added\n`;
            }

            // check for price
            if(game.get('price') != 'null') {
                infoString = infoString + `Price: $${game.get('price')}\n`;
            }
            else {
                infoString = infoString + `Price not yet added\n`;
            }

            await interaction.reply(infoString);
        }
}
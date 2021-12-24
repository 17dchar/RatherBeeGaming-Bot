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
            
            const infoString =  `__**${game.get('name')}**__\n` + 
                                `>>> ${game.get('description')}\n` +
                                `$${game.get('price')}`
            await interaction.reply(infoString);
        }
}
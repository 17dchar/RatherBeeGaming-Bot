const { SlashCommandBuilder } = require('@discordjs/builders');
const { Games } = require('../Models/game');
const { Ratings } = require('../Models/rating');

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
        const newRating = interaction.options.getString('rating');
        const userID = interaction.member.user.id;
        const userName = interaction.member.user.username;

        try{
            await Ratings.create({ user: userID, rated: newRating});
            await interaction.reply(`Rating added.`);
        }
        catch (e) {
            if(e.name === 'SequelizeUniqueConstraintError'){
                await Ratings.update({ rating: newRating }, { where: {user: userID} });
                await interaction.reply(`Rating added.`);
            } else {
                await interaction.reply('There was an error adding this rating');
            }
            console.log(e);
        }
        checkTheRating = await Games.findOne({ where: { name: gName}, include: Ratings});
        console.log(checkTheRating.get('rated'));
	},
};
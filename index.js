// required classes and config
const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');
const {token} = require('./config.json');
const Games = require('./Models/game');
const db = require('./db.js'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

// establish intents
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS);
myIntents.add(Intents.FLAGS.GUILD_MESSAGES);

// create client instance
const client = new Client({intents: myIntents});
client.commands = new Collection();

// reads command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// add commands from files to collection
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
	console.log(`${file} loaded`);
    // key = command name, value = exported module
    client.commands.set(command.data.name, command);
}

// listen for command
client.on('interactionCreate', async interaction => {
    // ignore non-commands
	if (!interaction.isCommand()) return;

    // get respective command from list
	const command = client.commands.get(interaction.commandName);

    // if command undefined => exit
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
	}
});

// init
client.once('ready', () => {
    console.log('Bee bot ready!');
});

client.login(token);
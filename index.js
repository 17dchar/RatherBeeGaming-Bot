// required classes and config
const {Client, Intents} = require('discord.js');
const {token} = require('./config.json');

// intents
/* not working
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS);
myIntents.add(Intents.FLAGS.GUILD_MEMBERS);
myIntents.add(Intents.GUILD_MESSAGES);
*/

// create client instance
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// ready check
client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);
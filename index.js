const fs = require('fs');
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessages,
	],
});

client.once('ready', () => {
	console.log('Ready!');
});

// Dynamically load event handlers
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	const eventName = file.split('.')[0];
	client.on(eventName, event.bind(null, client));
}

// Log in with the bot token
client.login(process.env.TOKEN);
const schedule = require('node-schedule');
const getMessage = require('../resources/steamVRMessages');
const { SlashCommandBuilder } = require('discord.js');

module.exports = (client) => {
	client.user.setPresence({
		activities: [{ name: 'Deprimida com a Valve...', type: 4 }],
	});

	// Register slash commands
	const commands = [
		new SlashCommandBuilder()
			.setName('falar')
			.setDescription('Faz o bot enviar uma mensagem no canal atual')
			.addStringOption(option =>
				option.setName('mensagem')
					.setDescription('A mensagem que o bot deve enviar')
					.setRequired(true)
			)
			.addAttachmentOption(option =>
				option.setName('anexo')
					.setDescription('Imagem ou arquivo para enviar junto com a mensagem')
					.setRequired(false)
			)
	];

	// Register commands globally
	client.application.commands.set(commands);

	// Send a message every day at 6 PM
	schedule.scheduleJob('0 18 * * *', () => {
		const channel = client.channels.cache.get('1102758639732801586');
		if (channel) {
			channel.send(getMessage('2023-12-04T18:00:00'));
		}
	});
};

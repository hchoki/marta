module.exports = (client, interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'falar') {
		const mensagem = interaction.options.getString('mensagem');
		
		// Send the message to the same channel where the command was used
		interaction.channel.send(mensagem);
		
		// Reply to the user with a confirmation (only visible to them)
		interaction.reply({ content: 'Mensagem enviada!', ephemeral: true });
	}
};
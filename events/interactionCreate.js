module.exports = (client, interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'falar') {
		const mensagem = interaction.options.getString('mensagem');
		const anexo = interaction.options.getAttachment('anexo');
		
		// Prepare the message options
		const messageOptions = {
			content: mensagem
		};

		// If there's an attachment, add it to the message
		if (anexo) {
			messageOptions.files = [anexo];
		}
		
		// Send the message to the same channel where the command was used
		interaction.channel.send(messageOptions);
		
		// Reply to the user with a confirmation (only visible to them)
		const confirmationText = anexo ? 
			'Mensagem com anexo enviada!' : 
			'Mensagem enviada!';
		interaction.reply({ content: confirmationText, ephemeral: true });
	}
};
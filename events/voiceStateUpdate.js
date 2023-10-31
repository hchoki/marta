module.exports = (client, oldState, newState) => {
	const username = newState.member ? newState.member.user.tag : oldState.member.user.tag;
	const timestamp = Math.floor(new Date().getTime() / 1000);
	let message = '';

	if (!oldState.channelId && newState.channelId) {
		message += `<t:${timestamp}:R> | ${username} entrou no canal ${newState.channel.name}.`;
	}
	else if (oldState.channelId && !newState.channelId) {
		message += `<t:${timestamp}:R> | ${username} saiu do canal ${oldState.channel.name}.`;
	}
	else if (oldState.channelId !== newState.channelId) {
		message += `<t:${timestamp}:R> |${username} trocou do canal ${oldState.channel.name} para ${newState.channel.name}.`;
	}

	if (message) {
		const textChannel = client.channels.cache.get(process.env.JOIN_TEXT_CHANNEL_ID);
		textChannel.send(message);
	}
};
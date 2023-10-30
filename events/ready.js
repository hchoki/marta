const schedule = require('node-schedule');
const steamVRFestivalMessages = require('./resources/steamVRFestivalMessages');

function getTimeLeft() {
	const eventDate = new Date('2023-12-04T18:00:00');
	const now = new Date();
	const timeLeft = eventDate - now;

	const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

	return { daysLeft, hoursLeft };
}

function sendMessage(client, channelId) {
	const { daysLeft, hoursLeft } = getTimeLeft();
	const randomIndex = Math.floor(Math.random() * steamVRFestivalMessages.length);
	const messageTemplate = steamVRFestivalMessages[randomIndex];
	const message = messageTemplate
		.replace('${daysLeft}', daysLeft)
		.replace('${hoursLeft}', hoursLeft);

	const channel = client.channels.cache.get(channelId);
	if (channel) {
		channel.send(message);
	}
	else {
		console.error(`Channel with ID ${channelId} not found`);
	}
}

module.exports = (client) => {
	const channelId = '1102758639732801586';
	// Send a message every day at 6 PM
	schedule.scheduleJob('0 18 * * *', () => {
		sendMessage(client, channelId);
	});

	schedule.scheduleJob('*/45 * * * *', () => {
		const voiceChannels = client.channels.cache.filter(c => c.type === 'GUILD_VOICE');
		const hasMembers = voiceChannels.some(voiceChannel => voiceChannel.members.size > 0);

		if (hasMembers) {
			sendMessage(client, channelId);
		}
	});

};

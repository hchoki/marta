const schedule = require('node-schedule');
const steamVRMessages = require('../resources/steamVRMessages');
const { getTimeLeft } = require('../utils');

function sendMessage(client, channelId) {
	const { daysLeft, hoursLeft } = getTimeLeft();
	const randomIndex = Math.floor(Math.random() * steamVRMessages.length);
	const messageTemplate = steamVRMessages[randomIndex];
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
	client.user.setPresence({
		activities: [{ name: 'Esperando a Valve fazer algo', type: 4 }],
	});

	const channelId = '1102758639732801586';
	// Send a message every day at 6 PM
	schedule.scheduleJob('0 18 * * *', () => {
		sendMessage(client, channelId);
	});
};

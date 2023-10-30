const schedule = require('node-schedule');
const steamVRMessages = require('../resources/steamVRMessages');
const { getTimeLeft } = require('../utils');

module.exports = (client) => {
	client.user.setPresence({
		activities: [{ name: 'Esperando a Valve fazer algo', type: 4 }],
	});

	// Send a message every day at 6 PM
	schedule.scheduleJob('0 18 * * *', () => {
		const { daysLeft, hoursLeft } = getTimeLeft();
		const randomIndex = Math.floor(Math.random() * steamVRMessages.length);
		const messageTemplate = steamVRMessages[randomIndex];
		const message = messageTemplate
			.replace('${daysLeft}', daysLeft)
			.replace('${hoursLeft}', hoursLeft);

		const channel = client.channels.cache.get('1102758639732801586');
		if (channel) {
			channel.send(message);
		}
	});
};

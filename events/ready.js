const schedule = require('node-schedule');
const getMessage = require('../resources/steamVRMessages');

module.exports = (client) => {
	client.user.setPresence({
		activities: [{ name: 'Deprimida com a Valve...', type: 4 }],
	});

	// Send a message every day at 6 PM
	schedule.scheduleJob('0 18 * * *', () => {
		const channel = client.channels.cache.get('1102758639732801586');
		if (channel) {
			channel.send(getMessage('2023-12-04T18:00:00'));
		}
	});
};

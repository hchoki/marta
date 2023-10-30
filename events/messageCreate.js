const steamVRMessages = require('../resources/steamVRMessages');
const { getTimeLeft } = require('../utils');

module.exports = (client, message) => {
	if (message.author.bot) return;

	const linkRegex = /https?:\/\/(www\.)?(twitter\.com|x\.com)\/[^\s]*/g;
	const foundLinks = message.content.match(linkRegex);

	if (message.embeds.length === 0 && foundLinks) {
		let replyText = '';
		for (const link of foundLinks) {
			const convertedLink = link.replace(/(twitter\.com|x\.com)/, 'vxtwitter.com');
			replyText += `${convertedLink}\n`;
		}
		message.reply(replyText);
	}

	// VR message logic
	if (/vr/i.test(message.content)) {
		const randomIndex = Math.floor(Math.random() * steamVRMessages.length);
		const messageTemplate = steamVRMessages[randomIndex];
		const { daysLeft, hoursLeft } = getTimeLeft('2023-12-04T18:00:00');
		const replyText = messageTemplate
			.replace('${daysLeft}', daysLeft)
			.replace('${hoursLeft}', hoursLeft);
		message.reply(replyText);
	}
};

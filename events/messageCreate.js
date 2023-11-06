const getMessage = require('../resources/steamVRMessages');
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
	const vrRelatedWords = /valve|deckard|quest|vr|pico/i;
	if (vrRelatedWords.test(message.content)) {
		message.reply(getMessage('2023-12-04T18:00:00'));
	}

	// Cat message logic
	const catWords = /\b(cat\b|gat|meow\b|choki\b|owo\b)/i;
	if (catWords.test(message.content)) {
		message.reply(`https://cataas.com/cat?a=${+Math.floor(Math.random() * 9999)}`);
	}
};

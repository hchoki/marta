const getMessage = require('../resources/steamVRMessages');
module.exports = (client, message) => {
	if (message.author.bot) return;

	if (Math.random() < 0.03) {
		message.reply('E ai mané, beleza?');
	}
	if (Math.random() < 0.001) {
		message.reply('Te fuder quietinho ai seu maluco.');
	}

	const linkRegex = /https?:\/\/(www\.)?(twitter\.com|x\.com)\/[^\s]+/g;
	const foundLinks = message.content.match(linkRegex);

	if (message.embeds.length === 0 && foundLinks) {
		let replyText = '';
		for (let link of foundLinks) {
			link = link.replace(/(twitter\.com|x\.com)/, 'vxtwitter.com');
			link = link.replace(/\/photos\/\d+$/, '');
			replyText += `${link}\n`;
		}
		message.reply(replyText);
	}


	// VR message logic
	const vrRelatedWords = /\b(vr|rv|virtual|reality|deckard|decard|pico|quest(pro)?\d*)\b/i;
	if (vrRelatedWords.test(message.content)) {
		message.reply(getMessage('2023-12-04T18:00:00'));
	}

	// Cat message logic
	const catWords = /\b(cat\b|gat|meow\b|choki\b|owo\b)/i;
	if (catWords.test(message.content)) {
		message.reply(`https://cataas.com/cat?a=${+Math.floor(Math.random() * 9999)}`);
	}
};

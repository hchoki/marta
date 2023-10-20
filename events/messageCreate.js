module.exports = (client, message) => {
	if (message.author.bot) return;

	const twitterRegex = /https?:\/\/(www\.)?twitter\.com\/[^\s]*/g;
	const foundLinks = message.content.match(twitterRegex);

	if (message.embeds.length == 0 && foundLinks) {
		let replyText = '';
		for (const link of foundLinks) {
			const convertedLink = link.replace('twitter.com', 'vxtwitter.com');
			replyText += `${convertedLink}\n`;
		}
		message.reply(replyText);
	}
};
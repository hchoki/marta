const getMessage = require('../resources/steamVRMessages');
module.exports = (client, message) => {
	if (message.author.bot) return;

	// if (Math.random() <= 0.03) {
	// 	message.reply('E ai mané, beleza?');
	// }
	if (Math.random() < 0.001) {
		message.reply('Te fuder quietinho ai seu maluco.');
	}

	const linkRegex = /https?:\/\/(www\.)?(twitter\.com|x\.com)\/[^\s]+/g;
	const foundLinks = message.content.match(linkRegex);

	if (foundLinks) {
		let replyText = '';
		for (let link of foundLinks) {
			link = link.replace(/(twitter\.com|x\.com)/, 'vxtwitter.com');
			link = link.replace(/\/photo\/\d+$/, '');
			replyText += `${link}\n`;
		}
		message.suppressEmbeds(true);
		message.reply(replyText);
	}


	// VR message logic
	const vrRelatedWords = /\b(vr|rv|virtual|reality|deckard|decard|pico|quest(pro)?\d*)\b/i;
	if (vrRelatedWords.test(message.content)) {
		message.reply(getMessage('2023-12-04T18:00:00'));
	}

	// Cat message logic
	const catWords = /\b(cat\b|gat|meow\b|choki\b|owo\b|fofyra\b|fofy\b|fofi\b)/i;
	if (catWords.test(message.content)) {
		message.reply(`https://cataas.com/cat?a=${+Math.floor(Math.random() * 9999)}`);
	}

	// Pompoarismo
	if (message.content.toLowerCase().includes('pompoarismo')) {
		// Function to handle the sending and editing of timed messages
		const startExercise = (repeatCount) => {
			if (repeatCount === 0) return;

			message.channel.send('Prende', { tts: true }).then((sentMessage) => {
				const updateMessage = (secondsLeft) => {
					if (secondsLeft === 0) {
						message.channel.send('Solta', { tts: true }).then(() => {
							if (repeatCount > 1) {
								setTimeout(() => {
									startExercise(repeatCount - 1);
								}, 5000);
							}
							return;
						});
					}
					else {
						sentMessage.edit('Prende' + '.'.repeat(5 - secondsLeft)).then(() => {
							setTimeout(() => updateMessage(secondsLeft - 1), 1000);
						});
					}
				};
				updateMessage(5);
			});
		};

		startExercise(5);
	}
};

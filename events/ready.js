const schedule = require('node-schedule');

const messages = [
	'Falta apenas ${daysLeft} dias e ${hoursLeft} horas para o início do Steam VR Festival! A ansiedade está a mil! 🎉',
	'Está chegando! Steam VR Festival em ${daysLeft} dias e ${hoursLeft} horas! Prepare seu headset! 🕶️',
	'A realidade virtual nunca mais será a mesma! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🎮',
	'Contagem regressiva: ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! Você está pronto? 💻',
	'O futuro da VR está batendo à porta! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🚀',
	'Prepare-se para uma imersão como nunca antes! ${daysLeft} dias e ${hoursLeft} horas até o Steam VR Festival! 🎧',
	'Falta pouco! ${daysLeft} dias e ${hoursLeft} horas para descobrir as novidades do Steam VR Festival! 🔥',
	'Você está tão animado quanto nós? ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🎉',
	'A espera está quase acabando! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! ⏰',
	'Conte os minutos! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival começar! 🎊',
	'Prepare seu setup! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 💻',
	'A revolução da realidade virtual está chegando! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🕶️',
	'Está quase na hora! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🎮',
	'Fique atento! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! ⏳',
	'O mundo da VR está prestes a mudar! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🌎',
	'Prepare-se para a aventura VR do ano! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🎢',
	'Está quase na hora de colocar seu headset! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 🕶️',
	'O Steam VR Festival está chegando! ${daysLeft} dias e ${hoursLeft} horas restantes! 🎮',
	'Prepare-se para experiências incríveis em VR! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! 💻',
	'A contagem regressiva está quase no fim! ${daysLeft} dias e ${hoursLeft} horas para o Steam VR Festival! ⏱️',
];

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
	const randomIndex = Math.floor(Math.random() * messages.length);
	const messageTemplate = messages[randomIndex];
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
};

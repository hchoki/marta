function getTimeLeft(eventDate) {
	const targetDate = new Date(eventDate);
	const now = new Date();
	const timeLeft = targetDate - now;

	if (timeLeft < 0) {
		return { daysLeft: 0, hoursLeft: 0, minutesLeft: 0 };
	}

	const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

	return { daysLeft, hoursLeft, minutesLeft };
}

module.exports = function getMessage(eventDate) {
	const { daysLeft, hoursLeft, minutesLeft } = getTimeLeft(eventDate);
	const messages = [
		`Falta apenas ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o início do Steam VR Festival! A ansiedade está a mil! 🎉`,
		`Está chegando! Steam VR Festival em ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos! Prepare seu headset! 🕶️`,
		`A realidade virtual nunca mais será a mesma! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🎮`,
		`Contagem regressiva: ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos e ${minutesLeft} minutos para o Steam VR Festival! Você está pronto? 💻`,
		`O futuro da VR está batendo à porta! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🚀`,
		`Prepare-se para uma imersão como nunca antes! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos até o Steam VR Festival! 🎧`,
		`Falta pouco! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para descobrir as novidades do Steam VR Festival! 🔥`,
		`Você está tão animado quanto nós? ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🎉`,
		`A espera está quase acabando! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! ⏰`,
		`Conte os minutos! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival começar! 🎊`,
		`Prepare seu setup! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 💻`,
		`A revolução da realidade virtual está chegando! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🕶️`,
		`Está quase na hora! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🎮`,
		`Fique atento! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! ⏳`,
		`O mundo da VR está prestes a mudar! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🌎`,
		`Prepare-se para a aventura VR do ano! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🎢`,
		`Está quase na hora de colocar seu headset! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 🕶️`,
		`O Steam VR Festival está chegando! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos restantes! 🎮`,
		`Prepare-se para experiências incríveis em VR! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! 💻`,
		`A contagem regressiva está quase no fim! ${daysLeft} dias e ${hoursLeft} horas e ${minutesLeft} minutos para o Steam VR Festival! ⏱️`,
	];

	const randomIndex = Math.floor(Math.random() * messages.length);
	return messages[randomIndex];
};

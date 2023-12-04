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

function getTimePast(eventDate) {
    	const targetDate = new Date(eventDate);
    	const now = new Date();
    	const timePast = now - targetDate;

    	if (timePast < 0) {
        	return { daysLeft: 0, hoursLeft: 0, minutesLeft: 0 };
    	}

    	const daysPast = Math.floor(timePast / (1000 * 60 * 60 * 24));
    	const hoursPast = Math.floor((timePast % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	const minutesPast = Math.floor((timePast % (1000 * 60 * 60)) / (1000 * 60));

    	return { daysPast, hoursPast, minutesPast };
}

module.exports = (eventDate) => {
    	const { daysPast, hoursPast, minutesPast } = getTimePast(eventDate);
    	const messages = [
        	`Fazem ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos que aconteceu o Steam VR Festival! Nada mudou 🎉`,
        	`Já se passaram ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos desde o Steam VR Festival! Você sente falta? 🕶️`,
        	`O Steam VR Festival foi há ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos atrás! Como o tempo voa! 🎮`,
        	`Já faz ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos desde o Steam VR Festival! Você está pronto para o próximo? 💻`,
        	`O futuro da VR chegou há ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos! O que mudou desde o Steam VR Festival? 🚀`,
        	`Fazem ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos desde a última imersão no Steam VR Festival! 🎧`,
        	`Desde o Steam VR Festival já se passaram ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos! Pronto para mais? 🔥`,
        	`Faz ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos que o Steam VR Festival aconteceu! Bons momentos! 🎉`,
        	`O Steam VR Festival foi há ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos! Como você se lembra dele? ⏰`,
        	`Já se passaram ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos desde o início do último Steam VR Festival! 🎊`,
        	`Seu setup mudou desde o último Steam VR Festival de ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos atrás? 💻`,
        	`A revolução da realidade virtual começou há ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos, no Steam VR Festival! 🕶️`,
        	`Já se passaram ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos desde o Steam VR Festival! 🎮`,
        	`Fazem ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos que o Steam VR Festival aconteceu! Fique atento para o próximo! ⏳`,
        	`O mundo da VR mudou há ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos com o Steam VR Festival! 🌎`,
        	`Fazem ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos que vivemos a aventura do Steam VR Festival do ano! 🎢`,
        	`O último Steam VR Festival foi há ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos! Saudades? 🕶️`,
        	`O Steam VR Festival terminou há ${daysPast} dias e ${hoursPast} horas e ${minutesPast} minutos! Continuamos na expectativa do próximo! 🎮`,
        	`Fazem ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos que experimentamos o Steam VR Festival! 💻`,
        	`Desde o Steam VR Festival, já se passaram ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos! ⏱️`,
        	'https://tenor.com/view/me-waiting-for-valve-deckard-valve-deckard-skeleton-wheelchair-gif-15912588111334799418',
    	];

   	const randomIndex = Math.floor(Math.random() * messages.length);
    	return messages[randomIndex];
};

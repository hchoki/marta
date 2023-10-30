const schedule = require('node-schedule');
const moment = require('moment');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const targetDate = moment('2023-12-04', 'YYYY-MM-DD');
		schedule.scheduleJob('0 18 * * *', () => {
			const today = moment();
			const daysLeft = targetDate.diff(today, 'days');

			const messages = [
				`Faltam apenas ${daysLeft} dias! Prepare-se para mergulhar na realidade virtual como nunca antes com o Steam VR Festival! 🎮🕶️`,
				`Está quase na hora! Apenas ${daysLeft} dias para o lançamento do incrível novo headset VR da Steam! #SteamVRFestival`,
				`A contagem regressiva está rolando! Marque no seu calendário, faltam só ${daysLeft} dias para o Steam VR Festival! 🚀`,
				`Prepare-se para ser surpreendido! Apenas ${daysLeft} dias para a revolução da realidade virtual no Steam VR Festival! 👾`,
				`Está quase lá! Apenas ${daysLeft} dias nos separam do Steam VR Festival e do novo headset VR da Steam! 🎉`,
				`Não consegue esperar? Nós também não! Apenas ${daysLeft} dias para o Steam VR Festival! 🙌`,
				`Sinta a emoção no ar! O Steam VR Festival está a apenas ${daysLeft} dias de distância! 🤖`,
				`Fique pronto para uma experiência inesquecível! Apenas ${daysLeft} dias para o Steam VR Festival! 🎮`,
				`A contagem regressiva começou! Faltam apenas ${daysLeft} dias para o lançamento do novo headset VR no Steam VR Festival! 🕶️`,
				`Preparado para a revolução VR? O Steam VR Festival está chegando em apenas ${daysLeft} dias! 🚀`,
				`A realidade virtual como você nunca viu antes, em apenas ${daysLeft} dias no Steam VR Festival! 🎉`,
				`É hora de se preparar! O Steam VR Festival e o novo headset VR estão chegando em ${daysLeft} dias! 🎮`,
				`A aventura VR está quase começando! Faltam apenas ${daysLeft} dias para o Steam VR Festival! 🕶️`,
				`Contagem regressiva para a diversão! Apenas ${daysLeft} dias para o Steam VR Festival! 🎉`,
				`A espera está quase acabando! O Steam VR Festival está chegando em ${daysLeft} dias! 🎮`,
				`Fique pronto para explorar novos mundos! Apenas ${daysLeft} dias para o Steam VR Festival! 🕶️`,
				`A nova era da realidade virtual está quase aqui! Faltam ${daysLeft} dias para o Steam VR Festival! 🎉`,
				`Prepare-se para uma experiência VR inovadora no Steam VR Festival em apenas ${daysLeft} dias! 🎮`,
				`A contagem regressiva para a diversão está rolando! Faltam apenas ${daysLeft} dias para o Steam VR Festival! 🕶️`,
				`Não perca! O Steam VR Festival e o novo headset VR estão chegando em ${daysLeft} dias! 🎉`,
			];


			const randomIndex = Math.floor(Math.random() * messages.length);
			const message = messages[randomIndex];
			const channel = client.channels.cache.get('1102758639732801586');
			if (channel) {
				channel.send(message);
			}
			else {
				console.error('O canal para a contagem regressiva não foi encontrado');
			}
		});

		console.log('Mensagem diária aleatória agendada.');
	},
};

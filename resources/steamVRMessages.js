function getTimePast(eventDate) {
    const targetDate = new Date(eventDate);
    const now = new Date();
    const timePast = now - targetDate;

    if (timePast < 0) {
        return { daysPast: 0, hoursPast: 0, minutesPast: 0 };
    }

    const daysPast = Math.floor(timePast / (1000 * 60 * 60 * 24));
    const hoursPast = Math.floor((timePast % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesPast = Math.floor((timePast % (1000 * 60 * 60)) / (1000 * 60));

    return { daysPast, hoursPast, minutesPast };
}

module.exports = (eventDate) => {
    const { daysPast, hoursPast, minutesPast } = getTimePast(eventDate);
    const messages = [
        `Fazem ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos desde o anúncio do Steam Frame... e ainda nada nas prateleiras. 🕰️`,
        `Já se passaram ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos desde o anúncio do Steam Frame. Será que ele virou vaporware? 💨`,
        `O Steam Frame foi anunciado há ${daysPast} dias e ${hoursPast} horas... e ainda não dá pra comprar. Classic Valve. 🔧`,
        `${daysPast} dias e contando desde o grande anúncio do Steam Frame! Loja? Nenhuma. Esperança? Talvez. 😅`,
        `Faz ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos que a Valve nos prometeu o Steam Frame. Ainda esperando o botão “Adicionar ao carrinho”. 🛒`,
        `Steam Frame foi anunciado há ${daysPast} dias e ${hoursPast} horas. O tempo passa, mas o botão de compra não aparece. ⏳`,
        `Desde o anúncio do Steam Frame já se passaram ${daysPast} dias e ${hoursPast} horas... e seguimos firmes na fé. 🙏`,
        `O lendário Steam Frame foi revelado há ${daysPast} dias e ${hoursPast} horas. Rumores dizem que ele está em uma caixa de Schrödinger — existe e não existe. 📦`,
        `Fazem ${daysPast} dias e ${hoursPast} horas que a Valve mostrou o Steam Frame. Ainda sem data. Gabe Newell dorme tranquilo. 😴`,
        `Há ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos o Steam Frame foi anunciado. Ainda mais raro que o Deckard! 🕶️`,
        `Já faz ${daysPast} dias e ${hoursPast} horas que o Steam Frame apareceu... e desapareceu da realidade. 🌀`,
        `Steam Frame anunciado há ${daysPast} dias. Nenhum preço, nenhuma pré-venda, apenas sonhos. 💭`,
        `Faz ${daysPast} dias e ${hoursPast} horas que o Steam Frame foi mostrado. A Valve realmente ama testar nossa paciência. 🎮`,
        `Desde o anúncio do Steam Frame (${daysPast} dias atrás), nada mudou. Nem o site, nem o estoque. 😬`,
        `O Steam Frame foi anunciado há ${daysPast} dias, ${hoursPast} horas e ${minutesPast} minutos. E o mundo continua sem frames. 📺`,
        `Já são ${daysPast} dias e ${hoursPast} horas desde o anúncio do Steam Frame. O hype morreu, mas a piada vive. 💀`,
        `Steam Frame anunciado há ${daysPast} dias. A Valve trabalha em silêncio... ou não trabalha. 🤔`,
        `Faz ${daysPast} dias e ${hoursPast} horas que o Steam Frame foi anunciado. Ainda sem sinal de vida. 🚫`,
        `O tempo desde o anúncio do Steam Frame: ${daysPast} dias, ${hoursPast} horas, ${minutesPast} minutos. A espera virou estilo de vida. 🧘`,
        'https://tenor.com/view/valve-steam-waiting-patiently-deckard-gabe-newell-gif-18912588111334799418',
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};

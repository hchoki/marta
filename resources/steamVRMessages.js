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

module.exports = (eventDate) => {
	const { daysLeft, hoursLeft, minutesLeft } = getTimeLeft(eventDate);
	const messages = [
		'https://tenor.com/view/me-waiting-for-valve-deckard-valve-deckard-skeleton-wheelchair-gif-15912588111334799418',
	];

	const randomIndex = Math.floor(Math.random() * messages.length);
	return messages[randomIndex];
};

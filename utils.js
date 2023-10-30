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

module.exports = { getTimeLeft };
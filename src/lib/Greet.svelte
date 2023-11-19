<script>
	function getTimeOfDay() {
		const currentTime = new Date();
		const currentHour = currentTime.getHours();

		if (currentHour >= 5 && currentHour < 12) {
			return 'morning';
		} else if (currentHour >= 12 && currentHour < 17) {
			return 'afternoon';
		} else {
			return 'evening';
		}
	}
	const message = getTimeOfDay();
	let emoji;
	if (message === 'morning') {
		emoji = '☀️';
	} else if (message === 'afternoon') {
		emoji = '🕑';
	} else if (message === 'evening') {
		emoji = '🌙';
	}
	const greeting = `Good ${message}!`;
</script>

<div class="ml-5">
    <h1 class="text-4xl font-bold">{greeting} {emoji}</h1>
</div>

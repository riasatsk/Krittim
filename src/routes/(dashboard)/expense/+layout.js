export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const token = window.localStorage.getItem('jwt-Token');
	const response = await fetch('https://krittim-backend.onrender.com/expense/count', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	if (!response.status === 200) {
		return console.log('Error on geting data from Expense API');
	}
	const count = await response.json();
	console.log(count);
	return {
		count: count
	};
};

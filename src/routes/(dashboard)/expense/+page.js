export const load = async (loadEvent) => {
	const { fetch, url, depends, parent } = loadEvent;
	const page = url.searchParams.get('page') || 1;
	const count = await parent();
	depends('reload:expense');
	console.log(page);
	const token = window.localStorage.getItem('jwt-Token');
	const response = await fetch('https://krittim-backend.onrender.com/expense/?page=' + page, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	if (!response.status === 200) {
		return console.log();
	}
	const expense = await response.json();
	return {
		expense,
		count: count.count,
		page
	};
};

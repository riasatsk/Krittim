export const load = async (loadEvent) => {
	const { fetch, url, depends, parent } = loadEvent;
	const count = await parent();
	const page = url.searchParams.get('page') || 1;
	depends('reload:events');
	const token = window.localStorage.getItem('jwt-Token');
	const response = await fetch('https://krittim-backend.onrender.com/events/?page=' + page, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	if (!response.status === 200) {
		return console.log('Errorn on Geting data from Events API');
	}
	const events = await response.json();
	return {
		events,
		count:count.count,
		page:page
	};
};

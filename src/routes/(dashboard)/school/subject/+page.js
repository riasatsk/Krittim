export const load = async (loadEvent) => {
	const { fetch,depends } = loadEvent;
	const token = window.localStorage.getItem('jwt-Token');
	depends('on:subject')
	const response = await fetch('https://krittim-backend.onrender.com/subject', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	const data = await response.json();
	const noOfSubject = data.length;

	return {
		subjects: data,
		noOfSubject: noOfSubject
	};
};

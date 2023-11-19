export const load = async (loadEvent) => {
	const { fetch,depends } = loadEvent;
	const token = window.localStorage.getItem('jwt-Token');
	depends('on:subject')
	const response = await fetch('http://localhost:3000/subject', {
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

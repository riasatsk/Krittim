export const load = async (loadEvent) => {
	const { fetch, depends } = loadEvent;
	const token = window.localStorage.getItem('jwt-Token');
	depends('on:class');
	const response = await fetch('https://krittim-backend.onrender.com/class', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	if (!response.status === 200) {
		return console.log(error);
	}
	const classes = await response.json();
	console.log(classes);
	return {
		classes: classes,
		noOfClass: classes.length
	};
};

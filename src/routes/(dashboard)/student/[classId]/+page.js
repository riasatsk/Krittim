export const load = async (loadEvent) => {
	const { fetch, params } = loadEvent;
    const {classId} = params
	const token = window.localStorage.getItem('jwt-Token');
	const response = await fetch(`https://krittim-backend.onrender.com/student/${classId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	if (!response.status === 200) {
		return console.log(error);
	}
	const students = await response.json();

	return {
		students: students
	};
};

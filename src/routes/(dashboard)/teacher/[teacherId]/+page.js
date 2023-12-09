export const load = async (loadEvent) => {
	const { fetch, params } = loadEvent;
    const {teacherId} = params;
	const token = window.localStorage.getItem('jwt-Token');
	const response = await fetch('https://krittim-backend.onrender.com/subject', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	const responseOnGetTeachers = await fetch(`https://krittim-backend.onrender.com/teacher/${teacherId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	const teacher = await responseOnGetTeachers.json();
	const subjects = await response.json();
	return {
		subjects: subjects,
		teacher: teacher
	};
};

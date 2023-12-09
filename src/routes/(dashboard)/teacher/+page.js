export const load = async (loadEvent) => {
	const { fetch, depends } = loadEvent;
	const token = window.localStorage.getItem('jwt-Token');
	depends('on:teacher');
	const response = await fetch('https://krittim-backend.onrender.com/subject', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	const responseOnGetTeachers = await fetch('https://krittim-backend.onrender.com/teacher', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	const teacher = await responseOnGetTeachers.json();
	const subjects = await response.json();
	return {
		subjects: subjects,
		noOfTeacher: teacher.length,
		teachers: teacher
	};
};

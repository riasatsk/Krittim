export const load = async (loadEvent) => {
	const { fetch, params } = loadEvent;
    const {teacherId} = params;
	const token = window.localStorage.getItem('jwt-Token');
	const response = await fetch('/api/subject', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	const responseOnGetTeachers = await fetch(`/api/teacher/${teacherId}`, {
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

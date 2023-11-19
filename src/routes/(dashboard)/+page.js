import { goto } from '$app/navigation';

export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const token = window.localStorage.getItem('jwt-Token');
	if (!token) {
		return goto('/login');
	}
	const response = await fetch('/api/', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ` + token
		}
	});
	if (response.status === 401) {
		return goto('/login');
	}
	const data = await response.json();
	return {
		data
	};
};



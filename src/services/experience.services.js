import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

const experienceUrl = `${baseUrl}/experience`;
export async function getExperience(token) {
	const result = await axios.get(experienceUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function addExperience(experience, token) {
	const result = await axios.post(experienceUrl, experience, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

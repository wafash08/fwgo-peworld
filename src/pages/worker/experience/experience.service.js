import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const experienceUrl = `${baseUrl}/experience`;

export async function getExperienceByWorkerId(id) {
	const result = await axios.get(`${experienceUrl}/${id}`);
	return result.data;
}

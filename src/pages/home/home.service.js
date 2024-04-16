import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const workersUrl = `${baseUrl}/workers`;

export async function getWorkers(params) {
	const result = await axios.get(`${workersUrl}`, { params });
	return { workers: result.data.data, pagination: result.data.pagination };
}

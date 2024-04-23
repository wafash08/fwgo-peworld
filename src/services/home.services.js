import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const workersUrl = `${baseUrl}/workers`;

export async function getWorkers({
	page = 1,
	limit = 10,
	search = '',
	sort = '',
	sortBy = 'DESC',
}) {
	const result = await axios.get(`${workersUrl}`, {
		params: { page, limit, search, sort, sortBy },
	});
	return { workers: result.data.data, pagination: result.data.pagination };
}

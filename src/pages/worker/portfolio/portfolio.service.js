import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const portfolioUrl = `${baseUrl}/portfolio`;

export async function getPortfolioByWorkerId(id) {
	const result = await axios.get(`${portfolioUrl}/${id}`);
	return result.data;
}

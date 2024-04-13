import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const workersUrl = `${baseUrl}/workers`;
const skillsUrl = `${baseUrl}/skills`;

export async function getWorkerById(id) {
	const result = await axios.get(`${workersUrl}/${id}`);
	return result.data;
}

export async function getSkillByWorkerId(id) {
	const result = await axios.get(`${skillsUrl}/${id}`);
	return result.data;
}

const experienceUrl = `${baseUrl}/experience`;
export async function getExperiencesByWorkerId(id) {
	const result = await axios.get(`${experienceUrl}/${id}`);
	return result.data;
}

const portfolioUrl = `${baseUrl}/portfolio`;
export async function getPortfolioByWorkerId(id) {
	const result = await axios.get(`${portfolioUrl}/${id}`);
	return result.data;
}

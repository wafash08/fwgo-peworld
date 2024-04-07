import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const workersUrl = `${baseUrl}/workers`;
const skillsUrl = `${baseUrl}/skills`;
const portfolioUrl = `${baseUrl}/portfolio`;
const experienceUrl = `${baseUrl}/experience`;

export async function getWorkers(limit = 10, page = 1) {
	const result = await axios.get(`${workersUrl}/?limit=${limit}&page=${page}`);
	return result.data;
}

export async function getWorkerById(id) {
	const result = await axios.get(`${workersUrl}/${id}`);
	return result.data;
}

export async function getSkillByWorkerId(id) {
	const result = await axios.get(`${skillsUrl}/${id}`);
	return result.data;
}

export async function getPortofolioByWorkerId(id) {
	const result = await axios.get(`${portfolioUrl}/${id}`);
	return result.data;
}

export async function getExperienceByWorkerId(id) {
	const result = await axios.get(`${experienceUrl}/${id}`);
	return result.data;
}

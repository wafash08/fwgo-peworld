import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

let token = null;

export async function getToken() {
	const userFromLocalStorage = localStorage.getItem('peworld_user');
	const user = JSON.parse(userFromLocalStorage);
	token = user.token;
	return;
}

const profileUrl = `${baseUrl}/workers/profile`;

export async function getProfile() {
	const result = await axios.get(profileUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data;
}

const portfolioUrl = `${baseUrl}/portfolio`;

export async function getPortfolio() {
	const result = await axios.get(portfolioUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data;
}

const experienceUrl = `${baseUrl}/experience`;

export async function getExperience() {
	const result = await axios.get(experienceUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data;
}

const skillsUrl = `${baseUrl}/skills`;

export async function getSkills() {
	const result = await axios.get(skillsUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data;
}

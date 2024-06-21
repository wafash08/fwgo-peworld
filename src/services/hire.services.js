import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const hireUrl = `${baseUrl}/hire`;
const hireWithWorkersUrl = `${baseUrl}/hire/workers`;
const hireWithRecruitersUrl = `${baseUrl}/hire/recruiters`;

export async function addHire(data, token) {
	const result = await axios.post(hireUrl, data, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function getSentHire(token) {
	const result = await axios.get(hireWithRecruitersUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function getReceivedHire(token) {
	const result = await axios.get(hireWithWorkersUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

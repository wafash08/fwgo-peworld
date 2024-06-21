import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

const skillsUrl = `${baseUrl}/skills`;
export async function getSkills(token) {
	const result = await axios.get(skillsUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function addSkills(skill_name, token) {
	const result = await axios.post(skillsUrl, skill_name, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function deleteSkill(id, token) {
	const result = await axios.delete(`${skillsUrl}/${id}`, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

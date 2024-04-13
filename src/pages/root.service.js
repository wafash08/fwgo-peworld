import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const recruiterUrl = `${baseUrl}/recruiters/profile`;

export async function getRecruiterProfile(token) {
	const result = await axios.get(recruiterUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

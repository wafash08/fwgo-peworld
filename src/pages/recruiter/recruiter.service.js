import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const recruiterUrl = `${baseUrl}/recruiters/profile`;

export async function updateRecruiterProfile(recruiter, token) {
	const result = await axios.put(recruiterUrl, recruiter, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}

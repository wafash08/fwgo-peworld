import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const loginUrl = `${baseUrl}/auth/login`;

export async function login(user) {
	const result = await axios.post(loginUrl, user);
	return result.data.data;
}

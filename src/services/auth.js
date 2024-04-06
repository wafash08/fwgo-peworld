import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const workerSignupUrl = `${baseUrl}/workers/register`;
const loginUrl = `${baseUrl}/auth/login`;

export async function signup(newUser) {
	return axios.post(workerSignupUrl, newUser);
}

export async function login(user) {
	const result = await axios.post(loginUrl, user);
	return result.data.data;
}

import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const workerSignupUrl = `${baseUrl}/workers/register`;

export async function signup(newUser) {
	return axios.post(workerSignupUrl, newUser);
}

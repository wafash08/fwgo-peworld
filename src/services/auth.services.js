import axios from 'axios';

// === user services
const baseUrl = import.meta.env.VITE_API_URL_V1;

const loginUrl = `${baseUrl}/auth/login`;
export async function login({ email, password }) {
	const result = await axios.post(loginUrl, { email, password });
	return result.data.data;
}

const workerSignupUrl = `${baseUrl}/workers/register`;
export async function signupWorker(newWorker) {
	return axios.post(workerSignupUrl, newWorker);
}

const recruiterSignupUrl = `${baseUrl}/recruiters/register`;
export async function signupRecruiter(newRecruiter) {
	return axios.post(recruiterSignupUrl, newRecruiter);
}

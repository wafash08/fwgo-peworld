import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const workerSignupUrl = `${baseUrl}/workers/register`;
const recruiterSignupUrl = `${baseUrl}/recruiters/register`;

export async function signupWorker(newWorker) {
	return axios.post(workerSignupUrl, newWorker);
}

export async function signupRecruiter(newRecruiter) {
	return axios.post(recruiterSignupUrl, newRecruiter);
}

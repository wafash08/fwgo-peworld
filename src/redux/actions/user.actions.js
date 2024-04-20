import axios from 'axios';
import { LOCAL_STORAGE_KEY } from '../../config/constants';

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

// === user action creator ===

export function userLoggedIn({ email, password }) {
	return async dispatch => {
		try {
			dispatch({ type: 'user/userLoading' });
			const user = await login({ email, password });
			const { role, token } = user;
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ role, token }));
			dispatch({ type: 'user/userLoggedIn', payload: { role, token } });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function userSignedUp(user, role) {
	return async dispatch => {
		try {
			dispatch({ type: 'user/userLoading' });
			if (role === 'recruiter') {
				await signupRecruiter(user);
			} else if (role === 'worker') {
				await signupWorker(user);
			}
			dispatch({ type: 'user/userSignedUp' });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

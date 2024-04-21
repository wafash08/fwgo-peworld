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

// === auth action creators ===

export function authLoggedIn({ email, password }) {
	return async dispatch => {
		try {
			dispatch(authLoading());
			const user = await login({ email, password });
			const { role, token } = user;
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ role, token }));
			dispatch({ type: 'auth/authLoggedIn', payload: { role, token } });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function authSignedUp(user, role) {
	return async dispatch => {
		try {
			dispatch(authLoading());
			if (role === 'recruiter') {
				await signupRecruiter(user);
			} else if (role === 'worker') {
				await signupWorker(user);
			}
			dispatch({ type: 'auth/authSignedUp' });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function authFailed(errorMessage) {
	return {
		type: 'auth/authFailed',
		payload: errorMessage,
	};
}

export function authLoading() {
	return {
		type: 'auth/authLoading',
	};
}

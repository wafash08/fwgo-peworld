import { LOCAL_STORAGE_KEY } from '../../config/constants';
import { login, signupRecruiter, signupWorker } from '../../services';

export function authLoggedIn({ email, password }) {
	return async dispatch => {
		try {
			dispatch(authLoading());
			const user = await login({ email, password });
			const { role, token } = user;
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ role, token }));
			dispatch({ type: 'auth/authLoggedIn' });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function authLoggedOut() {
	return async dispatch => {
		try {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
			dispatch({ type: 'auth/authLoggedOut' });
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

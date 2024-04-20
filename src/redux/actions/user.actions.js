import axios from 'axios';
import { LOCAL_STORAGE_KEY } from '../../config/constants';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const loginUrl = `${baseUrl}/auth/login`;

// === user services

export async function login({ email, password }) {
	const result = await axios.post(loginUrl, { email, password });
	return result.data.data;
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
			dispatch({
				type: 'user/userFailed',
				payload: error.response.data.message, // error dari axios panjang banget lol
			});
		}
	};
}

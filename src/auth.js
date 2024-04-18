import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;
const loginUrl = `${baseUrl}/auth/login`;
const logoutUrl = `${baseUrl}/auth/logout`;

const LOCAL_STORAGE_KEY = 'peworld';

export const authProvider = {
	async signin(user) {
		try {
			const result = await axios.post(loginUrl, user);
			const loggedInUser = result.data.data;
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(loggedInUser));
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	},
	getUser() {
		try {
			const userFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
			const { token, role } = JSON.parse(userFromLocalStorage);
			return {
				token,
				role,
			};
		} catch (error) {
			// throw new Error(error.body.message);
			return error;
		}
	},
	async signout() {
		try {
			await axios.get(logoutUrl);
			localStorage.removeItem(LOCAL_STORAGE_KEY);
			return null;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	},
};

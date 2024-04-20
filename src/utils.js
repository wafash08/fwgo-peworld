import { LOCAL_STORAGE_KEY } from './config/constants';

export function isEmpty(obj) {
	for (const prop in obj) {
		if (Object.hasOwn(obj, prop)) {
			return false;
		}
	}

	return true;
}

export function getTokenFromLocalStorage() {
	const userFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (!userFromLocalStorage) {
		return null;
	}
	const { token } = JSON.parse(userFromLocalStorage);
	return token;
}

export function getRoleFromLocalStorage() {
	const userFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (!userFromLocalStorage) {
		return null;
	}
	const { role } = JSON.parse(userFromLocalStorage);
	return role;
}

export function createNewUser(formData) {
	const newUser = {};
	for (const [key, value] of formData) {
		// properti confirmPassword dan role tidak perlu diikutsertakan
		if (key === 'confirmPassword' || key === 'role') {
			continue;
		}
		newUser[key] = value;
	}
	return newUser;
}

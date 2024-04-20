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

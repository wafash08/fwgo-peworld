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

export function sortPortfolioByName(portfolio) {
	return portfolio.toSorted((a, b) => {
		const nameA = a.application_name.toUpperCase(); // ignore upper and lowercase
		const nameB = b.application_name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}

		// names must be equal
		return 0;
	});
}

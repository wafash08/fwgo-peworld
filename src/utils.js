import moment from 'moment';
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

export function sortByCreatedAtDesc(list) {
	return list.toSorted((a, b) => {
		const createdAtA = new Date(a.created_at);
		const createdAtB = new Date(b.created_at);
		const timeA = createdAtA.getTime();
		const timeB = createdAtB.getTime();
		return timeB - timeA;
	});
}

export function formatDate(createdAt) {
	const now = moment();
	const date = moment(createdAt);

	const diffMinutes = now.diff(date, 'minutes');
	const diffHours = now.diff(date, 'hours');
	const diffDays = now.diff(date, 'days');
	const diffMonths = now.diff(date, 'months');
	const diffYears = now.diff(date, 'years');

	if (diffMinutes < 1) {
		return 'just now';
	} else if (diffMinutes < 60) {
		return diffMinutes + ' minutes ago';
	} else if (diffHours < 24) {
		return diffHours + ' hours ago';
	} else if (diffDays < 30) {
		return diffDays + ' days ago';
	} else if (diffMonths < 12) {
		return diffMonths + ' months ago';
	} else {
		return diffYears + ' years ago';
	}
}

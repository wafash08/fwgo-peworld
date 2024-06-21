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
	const ago = moment(createdAt);

	const diffSeconds = now.diff(ago, 'seconds');
	const diffMinutes = now.diff(ago, 'minutes');
	const diffHours = now.diff(ago, 'hours');
	const diffDays = now.diff(ago, 'days');
	const diffMonths = now.diff(ago, 'months');
	const diffYears = now.diff(ago, 'years');

	if (Math.abs(diffSeconds) < 60) {
		return 'just now';
	} else if (Math.abs(diffMinutes) < 60) {
		return Math.abs(diffMinutes) + ' minutes ago';
	} else if (Math.abs(diffHours) < 24) {
		return Math.abs(diffHours) + ' hours ago';
	} else if (Math.abs(diffDays) < 30) {
		return Math.abs(diffDays) + ' days ago';
	} else if (Math.abs(diffMonths) < 12) {
		return Math.abs(diffMonths) + ' months ago';
	} else {
		return Math.abs(diffYears) + ' years ago';
	}
	// const date = moment(createdAt);
	// return moment(date).fromNow();
}

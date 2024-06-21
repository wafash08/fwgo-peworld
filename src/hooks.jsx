import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenFromLocalStorage } from './utils';
import { checkRole } from './services/role.services';

export function useDebounce(value, delay = 500) {
	const [debouncedValue, setDebouncedValue] = useState('');
	const timerRef = useRef();

	useEffect(() => {
		timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

		return () => {
			clearTimeout(timerRef.current);
		};
	}, [value, delay]);

	return debouncedValue;
}

export function useNotifications() {
	const { notifications, total, status } = useSelector(
		state => state.notifications
	);

	return { notifications, total, status };
}

export function useRole() {
	const [role, setRole] = useState(null);

	useEffect(() => {
		const token = getTokenFromLocalStorage();
		async function getRole(token) {
			const role = await checkRole(token);
			setRole(role);
		}
		getRole(token);
	}, []);

	return role;
}

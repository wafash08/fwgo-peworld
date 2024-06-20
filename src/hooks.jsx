import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

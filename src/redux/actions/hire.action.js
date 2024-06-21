import { addHire } from '../../services/hire.services';
import {
	notificationsReceivedAdded,
	notificationsSentAdded,
} from './notification.action';

export function hireLoading() {
	return {
		type: 'hire/hireLoading',
	};
}

export function hireFailed(errorMessage) {
	return {
		type: 'hire/hireFailed',
		payload: errorMessage,
	};
}

export function hireSentAdded(data, token) {
	return async dispatch => {
		try {
			dispatch(hireLoading());
			const hireSent = await addHire(data, token);
			dispatch({ type: 'hire/hireSentAdded', payload: hireSent });
			dispatch(notificationsSentAdded(1));
			dispatch(notificationsReceivedAdded(1));
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function hireSentLoaded() {}

import { checkRole } from '../../services/role.services';
import { getSentHire } from '../../services/hire.services';
import { sortByCreatedAtDesc } from '../../utils';

function notificationsLoading() {
	return {
		type: 'notifications/notificationsLoading',
	};
}

function notificationsFailed(error) {
	return {
		type: 'notifications/notificationsFailed',
		payload: error,
	};
}

export function notificationsLoaded(token) {
	return async dispatch => {
		try {
			dispatch(notificationsLoading());
			const role = await checkRole(token);
			if (role === 'worker') {
				console.log('worker');
			} else if (role === 'recruiter') {
				const notifications = await getSentHire(token);
				const notificationsSorted = sortByCreatedAtDesc(notifications);
				dispatch({
					type: 'notifications/notificationsLoaded',
					payload: notificationsSorted,
				});
			}
		} catch (error) {
			dispatch(notificationsFailed(error));
		}
	};
}

export function notificationsAdded(amount = 1) {
	return {
		type: 'notifications/notificationsAdded',
		payload: amount,
	};
}

export function notificationsRead() {
	return {
		type: 'notifications/notificationsRead',
		payload: 0,
	};
}

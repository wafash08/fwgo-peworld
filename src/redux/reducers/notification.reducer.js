const initialState = {
	notifications: [],
	total: 0,
	status: 'idle',
	error: null,
};

export function notificationsReducer(state = initialState, action) {
	switch (action.type) {
		case 'notifications/notificationsLoaded': {
			return {
				...state,
				status: 'succeed',
				notifications: action.payload,
			};
		}
		case 'notifications/notificationsAdded': {
			return {
				...state,
				status: 'new',
				total: state.total + action.payload,
			};
		}
		case 'notifications/notificationsRead': {
			return {
				...state,
				status: 'read',
				total: action.payload,
			};
		}
		case 'notifications/notificationsLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'notifications/notificationsFailed': {
			return {
				...state,
				status: 'failed',
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}

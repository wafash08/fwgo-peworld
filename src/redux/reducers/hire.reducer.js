const initialState = {
	sent: [],
	received: [],
	status: 'idle',
	error: null,
};

export function hireReducer(state = initialState, action) {
	switch (action.type) {
		case 'hire/hireSentLoaded': {
			return {
				...state,
				status: 'succeed',
				sent: action.payload,
			};
		}
		case 'hire/hireReceivedLoaded': {
			return {
				...state,
				status: 'succeed',
				received: action.payload,
			};
		}
		case 'hire/hireSentAdded': {
			return {
				...state,
				status: 'succeed',
				sent: [action.payload, ...state.sent],
			};
		}
		case 'hire/hireLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'hire/hireFailed': {
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

const initialState = {
	data: {
		profile: {},
		portfolio: [],
		skills: [],
		experiences: [],
	},
	status: 'idle',
	error: null,
};

export function workerReducer(state = initialState, action) {
	switch (action.type) {
		case 'worker/workerLoaded': {
			return {
				...state,
				status: 'success',
				data: action.payload,
			};
		}
		case 'worker/workerLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'worker/workerFailed': {
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

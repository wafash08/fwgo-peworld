const initialState = {
	workers: [],
	pagination: {},
	status: 'idle',
	error: null,
};

export function homeReducer(state = initialState, action) {
	switch (action.type) {
		case 'home/homeLoaded': {
			return {
				...state,
				status: 'succeed',
				workers: action.payload.workers,
				pagination: action.payload.pagination,
			};
		}
		case 'home/homeLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'home/homeFailed': {
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

const initialState = {
	experiences: [],
	status: 'idle', // loading, succeed, failed
	error: null,
};

/*
 */

export function experienceReducer(state = initialState, action) {
	switch (action.type) {
		case 'experience/experienceLoaded': {
			return {
				...state,
				experiences: action.payload,
				status: 'succeed',
			};
		}
		case 'experience/experienceLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'experience/experienceFailed': {
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

const initialState = {
	recruiter: {},
	status: 'idle', // loading, succeed, failed
	error: null,
};

/*
 */

export function recruiterReducer(state = initialState, action) {
	switch (action.type) {
		case 'recruiter/recruiterLoaded': {
			return {
				...state,
				status: 'succeed',
				recruiter: action.payload,
			};
		}
		case 'recruiter/recruiterUpdated': {
			return {
				...state,
				status: 'succeed',
				recruiter: {
					...state.recruiter,
					...action.payload,
				},
			};
		}
		case 'recruiter/recruiterLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'recruiter/recruiterFailed': {
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

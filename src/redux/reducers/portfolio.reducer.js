// {
//   application: '',
//   application_name: '',
//   created_at: '',
//   id: '',
//   image: '',
//   link_repository: '',
//   updated_at: null,
// },
const initialState = {
	portfolio: [],
	status: 'idle', // loading, succeed, failed
	error: null,
};

/*
 */

export function portfolioReducer(state = initialState, action) {
	switch (action.type) {
		case 'portfolio/portfolioLoaded': {
			return {
				...state,
				portfolio: action.payload,
				status: 'succeed',
			};
		}
		case 'portfolio/portfolioLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'portfolio/portfolioFailed': {
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

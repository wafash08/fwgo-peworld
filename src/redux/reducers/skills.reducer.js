const initialState = {
	skills: [],
	status: 'idle', // loading, succeed, failed
	error: null,
};

/*
 */

export function skillsReducer(state = initialState, action) {
	switch (action.type) {
		case 'skills/skillsLoaded': {
			return {
				...state,
				skills: action.payload,
				status: 'succeed',
			};
		}
		case 'skills/skillAdded': {
			return {
				...state,
				skills: [...state.skills, action.payload],
				status: 'succeed',
			};
		}
		case 'skills/skillDeleted': {
			const skillsWithoutDeletedOne = state.skills.filter(
				({ id }) => id !== action.payload
			);
			return {
				...state,
				skills: skillsWithoutDeletedOne,
				status: 'succeed',
			};
		}
		case 'skills/skillsLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'skills/skillsFailed': {
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

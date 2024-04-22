const initialState = {
	profile: {},
	status: 'idle', // loading, succeed, failed
	error: null,
};

/*
 */

export function profileReducer(state = initialState, action) {
	switch (action.type) {
		case 'profile/profileLoaded': {
			return {
				...state,
				status: 'succeed',
				profile: action.payload,
			};
		}
		case 'profile/profileBiodataEdited': {
			return {
				...state,
				status: 'succeed',
				profile: {
					...state.profile,
					...action.payload,
				},
			};
		}
		case 'profile/profilePhotoUpdated': {
			return {
				...state,
				status: 'succeed',
				profile: {
					...state.profile,
					...action.payload,
				},
			};
		}
		case 'profile/profileLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'profile/profileFailed': {
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

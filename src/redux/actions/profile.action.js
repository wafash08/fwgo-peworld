import { getProfile, updatePhotoProfile, updateProfile } from '../../services';

export function profileLoaded(token) {
	return async dispatch => {
		try {
			dispatch(profileLoading());
			const profile = await getProfile(token);
			dispatch({ type: 'profile/profileLoaded', payload: profile });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function profileBiodataEdited(data, token) {
	return async dispatch => {
		try {
			dispatch(profileLoading());
			const biodata = await updateProfile(data, token);
			dispatch({ type: 'profile/profileBiodataEdited', payload: biodata });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function profilePhotoUpdated(data, token) {
	return async dispatch => {
		try {
			const photo = await updatePhotoProfile(data, token);
			dispatch({ type: 'profile/profilePhotoUpdated', payload: photo });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function profileLoading() {
	return {
		type: 'profile/profileLoading',
	};
}

export function profileFailed(errorMessage) {
	return {
		type: 'profile/profileFailed',
		payload: errorMessage,
	};
}

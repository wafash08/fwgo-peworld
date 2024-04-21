import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

// === profile services ===
const profileUrl = `${baseUrl}/workers/profile`;
export async function getProfile(token) {
	const result = await axios.get(profileUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return result.data.data;
}

// === profile action creators ===
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

import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

// === experience services ===
const experienceUrl = `${baseUrl}/experience`;
export async function getExperience(token) {
	const result = await axios.get(experienceUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function addExperience(experience, token) {
	const result = await axios.post(experienceUrl, experience, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

// === portfolio action creators ===
export function experienceLoaded(token) {
	return async dispatch => {
		try {
			dispatch(experienceLoading());
			const experience = await getExperience(token);
			dispatch({ type: 'experience/experienceLoaded', payload: experience });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function experienceLoading() {
	return {
		type: 'experience/experienceLoading',
	};
}

export function experienceFailed(errorMessage) {
	return {
		type: 'experience/experienceFailed',
		payload: errorMessage,
	};
}

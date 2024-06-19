import { addExperience, getExperience } from '../../services';

export function experienceLoaded(token) {
	return async dispatch => {
		try {
			dispatch(experienceLoading());
			const experience = await getExperience(token);
			experience.sort((a, b) => b.work_year - a.work_year);
			dispatch({ type: 'experience/experienceLoaded', payload: experience });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function experienceAdded(data, token) {
	return async dispatch => {
		try {
			dispatch(experienceLoading());
			const experience = await addExperience(data, token);
			dispatch({ type: 'experience/experienceAdded', payload: experience });
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

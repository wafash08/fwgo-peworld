import { getRecruiterProfile } from '../../pages/root.service';
import { updateRecruiterProfile } from '../../services/recruiter.services';

export function recruiterLoaded(token) {
	return async dispatch => {
		try {
			dispatch(recruiterLoading());
			const recruiter = await getRecruiterProfile(token);
			dispatch({ type: 'recruiter/recruiterLoaded', payload: recruiter });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function recruiterUpdated(data, token) {
	return async dispatch => {
		try {
			dispatch(recruiterLoading());
			const recruiter = await updateRecruiterProfile(data, token);
			dispatch({ type: 'recruiter/recruiterUpdated', payload: recruiter });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function recruiterLoading() {
	return {
		type: 'recruiter/recruiterLoading',
	};
}

export function recruiterFailed(errorMessage) {
	return {
		type: 'recruiter/recruiterFailed',
		payload: errorMessage,
	};
}

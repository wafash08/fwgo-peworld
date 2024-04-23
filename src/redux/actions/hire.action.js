import { addHire } from '../../services/hire.services';

export function hireLoading() {
	return {
		type: 'hire/hireLoading',
	};
}

export function hireFailed(errorMessage) {
	return {
		type: 'hire/hireFailed',
		payload: errorMessage,
	};
}

export function hireSentAdded(data, token) {
	return async dispatch => {
		try {
			dispatch(hireLoading());
			const hireSent = await addHire(data, token);
			console.table(hireSent);
			dispatch({ type: 'hire/hireSentAdded', payload: hireSent });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function hireSentLoaded() {}

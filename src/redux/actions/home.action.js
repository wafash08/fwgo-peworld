import { getWorkers } from '../../services';

export function homeLoading() {
	return {
		type: 'home/homeLoading',
	};
}

export function homeFailed(errorMessage) {
	return {
		type: 'home/homeLoading',
		payload: errorMessage,
	};
}

export function homeLoaded(params) {
	return async dispatch => {
		try {
			dispatch(homeLoading());
			const { workers, pagination } = await getWorkers(params);
			dispatch({ type: 'home/homeLoaded', payload: { workers, pagination } });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

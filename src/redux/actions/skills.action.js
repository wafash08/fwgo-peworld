import { addSkills, deleteSkill, getSkills } from '../../services';

export function skillsLoaded(token) {
	return async dispatch => {
		try {
			dispatch(skillsLoading());
			const result = await getSkills(token);
			const skills = result.sort((a, b) => {
				return new Date(a.created_at) - new Date(b.created_at);
			});
			dispatch({ type: 'skills/skillsLoaded', payload: skills });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function skillAdded(data, token) {
	return async dispatch => {
		try {
			dispatch(skillsLoading());
			const skill = await addSkills(data, token);
			dispatch({ type: 'skills/skillAdded', payload: skill });
			dispatch(skillsLoaded(token));
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function skillDeleted(id, token) {
	return async dispatch => {
		try {
			const { id: idOfDeletedskill } = await deleteSkill(id, token);
			dispatch({ type: 'skills/skillDeleted', payload: idOfDeletedskill });
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

export function skillsLoading() {
	return {
		type: 'skills/skillsLoading',
	};
}

export function skillsFailed(errorMessage) {
	return {
		type: 'skills/skillsFailed',
		payload: errorMessage,
	};
}

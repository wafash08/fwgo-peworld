import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL_V1;

// === profile services ===
const skillsUrl = `${baseUrl}/skills`;
export async function getSkills(token) {
	const result = await axios.get(skillsUrl, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function addSkills(skill_name, token) {
	const result = await axios.post(skillsUrl, skill_name, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

export async function deleteSkill(id, token) {
	const result = await axios.delete(`${skillsUrl}/${id}`, {
		headers: { Authorization: `Bearer ${token}` },
	});

	return result.data.data;
}

// === profile action creators ===
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

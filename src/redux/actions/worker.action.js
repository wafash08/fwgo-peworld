import axios from 'axios';
import { sortPortfolioByName } from '../../utils';

const baseUrl = import.meta.env.VITE_API_URL_V1;

// === workers services ===
const workersUrl = `${baseUrl}/workers`;
const skillsUrl = `${baseUrl}/skills`;

export async function getWorkerById(id) {
	const result = await axios.get(`${workersUrl}/${id}`);
	return result.data.data;
}

export async function getSkillsByWorkerId(id) {
	const result = await axios.get(`${skillsUrl}/${id}`);
	return result.data.data;
}

const experienceUrl = `${baseUrl}/experience`;
export async function getExperiencesByWorkerId(id) {
	const result = await axios.get(`${experienceUrl}/${id}`);
	return result.data.data;
}

const portfolioUrl = `${baseUrl}/portfolio`;
export async function getPortfolioByWorkerId(id) {
	const result = await axios.get(`${portfolioUrl}/${id}`);
	return result.data.data;
}

// === workers action creators ===
export function workerLoaded(id) {
	return async dispatch => {
		try {
			dispatch(workerLoading());
			const [profile, portfolio, experiences, skills] = await Promise.all([
				getWorkerById(id),
				getPortfolioByWorkerId(id),
				getExperiencesByWorkerId(id),
				getSkillsByWorkerId(id),
			]);
			experiences.sort((a, b) => b.work_year - a.work_year);
			const portfolioSorted = sortPortfolioByName(portfolio);
			dispatch({
				type: 'worker/workerLoaded',
				payload: {
					profile,
					portfolio: portfolioSorted,
					experiences,
					skills,
				},
			});
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	};
}

// export function workerPortfolioLoaded(id) {
// 	return async dispatch => {
// 		try {
// 			dispatch(workerLoading());
// 			const portfolio = await getPortfolioByWorkerId(id);
// 			dispatch({
// 				type: 'worker/workerPortfolioLoaded',
// 				payload: portfolio,
// 			});
// 		} catch (error) {
// 			throw new Error(error.response.data.message);
// 		}
// 	};
// }

// export function workerSkillsLoaded(id) {
// 	return async dispatch => {
// 		try {
// 			dispatch(workerLoading());
// 			const skills = await getSkillsByWorkerId(id);
// 			dispatch({
// 				type: 'worker/workerSkillsLoaded',
// 				payload: skills,
// 			});
// 		} catch (error) {
// 			throw new Error(error.response.data.message);
// 		}
// 	};
// }

// export function workerExperiencesLoaded(id) {
// 	return async dispatch => {
// 		try {
// 			dispatch(workerLoading());
// 			const experiences = await getExperiencesByWorkerId(id);
// 			dispatch({
// 				type: 'worker/workerExperiencesLoaded',
// 				payload: experiences,
// 			});
// 		} catch (error) {
// 			throw new Error(error.response.data.message);
// 		}
// 	};
// }

export function workerLoading() {
	return {
		type: 'worker/workerLoading',
	};
}

export function workerFailed(errorMessage) {
	return {
		type: 'worker/workerFailed',
		payload: errorMessage,
	};
}

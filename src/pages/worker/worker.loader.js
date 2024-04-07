import {
	getExperienceByWorkerId,
	getPortofolioByWorkerId,
	getSkillByWorkerId,
	getWorkerById,
} from './worker.services';

export async function loader({ params }) {
	const id = params.workerId;
	const [worker, skills, portofolio, experience] = await Promise.all([
		getWorkerById(id),
		getSkillByWorkerId(id),
		getPortofolioByWorkerId(id),
		getExperienceByWorkerId(id),
	]);
	return {
		worker: worker.data,
		skills: skills.data,
		portofolio: portofolio.data,
		experiences: experience.data,
	};
}

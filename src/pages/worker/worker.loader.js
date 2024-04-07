import { getSkillByWorkerId, getWorkerById } from './worker.services';

export async function loader({ params }) {
	const id = params.workerId;
	const [worker, skills] = await Promise.all([
		getWorkerById(id),
		getSkillByWorkerId(id),
	]);
	return {
		worker: worker.data,
		skills: skills.data,
	};
}

import { redirect } from 'react-router-dom';
import {
	getExperiencesByWorkerId,
	getPortfolioByWorkerId,
	getSkillByWorkerId,
	getWorkerById,
} from './worker.services';
import { authProvider } from '../../auth';

export async function loader({ params, request }) {
	const { token } = authProvider.getUser();

	const isAuthenticated = token ? true : false;
	if (!isAuthenticated) {
		let params = new URLSearchParams();
		params.set('from', new URL(request.url).pathname);
		return redirect('/login?' + params.toString());
	}
	const id = params.workerId;
	const [worker, skills, portfolio, experiences] = await Promise.all([
		getWorkerById(id),
		getSkillByWorkerId(id),
		getPortfolioByWorkerId(id),
		getExperiencesByWorkerId(id),
	]);
	return {
		worker: worker.data,
		skills: skills.data,
		portfolio: portfolio.data,
		experiences: experiences.data,
	};
}

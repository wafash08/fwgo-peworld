import { redirect } from 'react-router-dom';
import { getSkillByWorkerId, getWorkerById } from './worker.services';
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
	const [worker, skills] = await Promise.all([
		getWorkerById(id),
		getSkillByWorkerId(id),
	]);
	return {
		worker: worker.data,
		skills: skills.data,
	};
}

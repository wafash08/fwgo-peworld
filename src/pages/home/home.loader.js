import { redirect } from 'react-router-dom';
import { authProvider } from '../../auth';
import { getWorkers } from './home.service';
import { matchSorter } from 'match-sorter';

export async function loader({ request }) {
	const { token } = authProvider.getUser();

	const isAuthenticated = token ? true : false;
	if (!isAuthenticated) {
		let params = new URLSearchParams();
		params.set('from', new URL(request.url).pathname);
		return redirect('/login?' + params.toString());
	}
	const url = new URL(request.url);
	const page = url.searchParams.get('page') ?? 1;
	let { workers, pagination } = await getWorkers({ limit: 10, page });

	const q = url.searchParams.get('q');

	if (q) {
		workers = matchSorter(workers, q, { keys: [item => item.skills] });
	}

	return {
		workers,
		pagination,
		q,
	};
}

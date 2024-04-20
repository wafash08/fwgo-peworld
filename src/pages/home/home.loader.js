import { redirect } from 'react-router-dom';
import { getWorkers } from './home.service';
import { getTokenFromLocalStorage } from '../../utils';

export async function loader({ request }) {
	const token = getTokenFromLocalStorage();

	if (!token) {
		let params = new URLSearchParams();
		params.set('from', new URL(request.url).pathname);
		return redirect('/login?' + params.toString());
	}
	const url = new URL(request.url);
	const page = url.searchParams.get('page') ?? 1;
	const search = url.searchParams.get('search');
	const sort = url.searchParams.get('sort');
	const params = {
		limit: 10,
		page,
		sort,
		search,
	};
	const { workers, pagination } = await getWorkers(params);

	return {
		workers,
		pagination,
		params,
	};
}

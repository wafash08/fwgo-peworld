import { getWorkers } from './home.service';

export async function loader() {
	const workers = await getWorkers();
	return {
		workers: workers.data,
		pagination: workers.pagination,
	};
}

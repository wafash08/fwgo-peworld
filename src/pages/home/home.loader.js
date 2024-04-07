import { getWorkers } from '../worker/worker.services';

export async function loader() {
	const workers = await getWorkers();
	return {
		workers: workers.data,
		pagination: workers.pagination,
	};
}

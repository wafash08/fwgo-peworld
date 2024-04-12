import { redirect } from 'react-router-dom';
import { authProvider } from '../../auth';
import { getWorkers } from './home.service';

export async function loader({ request }) {
	// If the user is not logged in and tries to access `/protected`, we redirect
	// them to `/login` with a `from` parameter that allows login to redirect back
	// to this page upon successful authentication
	const { token } = authProvider.getUser();

	const isAuthenticated = token ? true : false;
	if (!isAuthenticated) {
		let params = new URLSearchParams();
		params.set('from', new URL(request.url).pathname);
		return redirect('/login?' + params.toString());
	}
	const workers = await getWorkers();
	return {
		workers: workers.data,
		pagination: workers.pagination,
	};
}

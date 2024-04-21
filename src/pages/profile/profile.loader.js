import { redirect } from 'react-router-dom';
import { getRoleFromLocalStorage, getTokenFromLocalStorage } from '../../utils';

export async function loader({ request }) {
	const token = getTokenFromLocalStorage();
	const role = getRoleFromLocalStorage();

	if (!token) {
		let params = new URLSearchParams();
		params.set('from', new URL(request.url).pathname);
		return redirect('/login?' + params.toString());
	}

	if (role !== 'worker') {
		return redirect('/recruiter/profile');
	}
	return null;
}

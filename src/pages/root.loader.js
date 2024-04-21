import { getProfile } from '../redux/actions/profile.action';
import { getRoleFromLocalStorage, getTokenFromLocalStorage } from '../utils';
import { getRecruiterProfile } from './root.service';

export async function loader() {
	const token = getTokenFromLocalStorage();
	const role = getRoleFromLocalStorage();
	let user = null;
	switch (role) {
		case 'worker': {
			const result = await getProfile(token);
			user = result.data;
			break;
		}
		case 'recruiter': {
			user = await getRecruiterProfile(token);
			break;
		}
	}
	const isAuthenticated = user ? true : false;

	return { user, role, isAuthenticated };
}

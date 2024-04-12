import { authProvider } from '../auth';
import { getProfile } from './profile/profile.service';

export async function loader() {
	const { role, token } = authProvider.getUser();
	let user = null;
	switch (role) {
		case 'worker': {
			const result = await getProfile(token);
			user = result.data;
			break;
		}
		case 'recruiter': {
			// implementasi untuk user yang memiliki role recruiter
			user = null;
			break;
		}
	}
	const isAuthenticated = user ? true : false;

	return { user, role, isAuthenticated };
}

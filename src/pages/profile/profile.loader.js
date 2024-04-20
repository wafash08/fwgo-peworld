import { redirect } from 'react-router-dom';
import { getProfile, getSkills } from './profile.service';
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

	const profile = await getProfile(token);
	const skills = await getSkills(token);
	return { profile: profile.data, skills: skills.data };
}

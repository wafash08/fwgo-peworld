import { redirect } from 'react-router-dom';
import { authProvider } from '../../auth';
import { getProfile, getSkills } from './profile.service';

export async function loader({ request }) {
	const { token, role } = authProvider.getUser();

	const isAuthenticated = token ? true : false;
	if (!isAuthenticated) {
		let params = new URLSearchParams();
		params.set('from', new URL(request.url).pathname);
		return redirect('/login?' + params.toString());
	}

	if (role === 'recruiter') {
		return redirect('/recruiter/profile');
	}

	const profile = await getProfile(token);
	const skills = await getSkills(token);
	return { profile: profile.data, skills: skills.data };
}

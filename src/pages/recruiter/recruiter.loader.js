import { redirect } from 'react-router-dom';
import { authProvider } from '../../auth';
import { getRecruiterProfile } from '../root.service';

export async function loader() {
	const { token, role } = authProvider.getUser();

	if (role === 'worker') {
		return redirect('/profile');
	}
	const recruiter = await getRecruiterProfile(token);
	return { recruiter };
}

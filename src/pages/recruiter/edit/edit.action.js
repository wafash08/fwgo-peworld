import { redirect } from 'react-router-dom';
import { updateRecruiterProfile } from '../recruiter.service';
import { authProvider } from '../../../auth';

export async function action({ request }) {
	const formData = await request.formData();
	const { token } = authProvider.getUser();
	const recruiter = {};

	for (let [key, value] of formData) {
		recruiter[key] = value;
	}

	await updateRecruiterProfile(recruiter, token);

	return redirect('/recruiter/profile');
}

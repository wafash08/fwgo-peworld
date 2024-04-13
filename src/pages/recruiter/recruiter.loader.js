import { authProvider } from '../../auth';
import { getRecruiterProfile } from '../root.service';

export async function loader() {
	const { token } = authProvider.getUser();
	const recruiter = await getRecruiterProfile(token);
	return { recruiter };
}

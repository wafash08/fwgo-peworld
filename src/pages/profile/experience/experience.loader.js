import { authProvider } from '../../../auth';
import { getExperience } from '../profile.service';

export async function loader() {
	const { token } = authProvider.getUser();
	const experiences = await getExperience(token);
	return { experiences: experiences.data };
}

import { getExperience, getToken } from '../profile.service';

export async function loader() {
	await getToken();
	const experiences = await getExperience();
	return { experiences: experiences.data };
}

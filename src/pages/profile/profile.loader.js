import { getProfile, getSkills, getToken } from './profile.service';

export async function loader() {
	await getToken();
	const profile = await getProfile();
	const skills = await getSkills();
	return { profile: profile.data, skills: skills.data };
}

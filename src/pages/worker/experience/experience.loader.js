import { getExperienceByWorkerId } from './experience.service';

export async function loader({ params }) {
	const experiences = await getExperienceByWorkerId(params.workerId);
	return {
		experiences: experiences.data,
	};
}

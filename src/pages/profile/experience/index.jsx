import { useLoaderData } from 'react-router-dom';
import ExperienceList from '../../worker/experience/experience-list';

export default function ProfileExperience() {
	const { experiences } = useLoaderData();
	return experiences.length > 0 ? (
		<ExperienceList experiences={experiences} />
	) : (
		<p>Kamu belum memiliki pengalaman</p>
	);
}

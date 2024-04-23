import ExperienceList from '../../../components/experience-list';
import ExperienceSkeleton from '../../../components/experience-loader';

export default function WorkerExperience({ experiences, name, status }) {
	if (status === 'loading') {
		return <ExperienceSkeleton />;
	}
	return experiences.length > 0 ? (
		<ExperienceList experiences={experiences} />
	) : (
		<p>{name} belum memiliki pengalaman</p>
	);
}

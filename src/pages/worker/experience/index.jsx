import ExperienceList from './experience-list';

export default function WorkerExperience({ experiences, name }) {
	return experiences.length > 0 ? (
		<ExperienceList experiences={experiences} />
	) : (
		<p>{name} belum memiliki pengalaman</p>
	);
}

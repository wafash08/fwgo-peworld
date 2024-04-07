import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import ExperienceList from './experience-list';

export default function WorkerExperience() {
	const { experiences } = useLoaderData();
	const { worker } = useRouteLoaderData('worker');

	console.log('experiences >> ', experiences);
	console.log('worker >> ', worker);

	return experiences.length > 0 ? (
		<ExperienceList experiences={experiences} />
	) : (
		<p>{worker.name} belum memiliki pengalaman</p>
	);
}

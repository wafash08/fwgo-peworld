import { useRouteLoaderData } from 'react-router-dom';
import EditRecruiterForm from './edit-recruiter-form';
import EditRecruiterProfile from './edit-recruiter-profile';

export default function EditRecruiterPage() {
	const { recruiter } = useRouteLoaderData('recruiter');
	return (
		<div className='flex flex-col lg:flex-row items-start gap-8 -mt-[280px]'>
			<EditRecruiterProfile recruiter={recruiter} />
			<EditRecruiterForm />
		</div>
	);
}

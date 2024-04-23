import EditRecruiterForm from './edit-recruiter-form';
import EditRecruiterProfile from './edit-recruiter-profile';

export default function EditRecruiterPage() {
	return (
		<div className='flex flex-col lg:flex-row items-start gap-8 -mt-[280px]'>
			<EditRecruiterProfile />
			<EditRecruiterForm />
		</div>
	);
}

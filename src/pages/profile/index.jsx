import { Outlet, useLoaderData } from 'react-router-dom';
import Container from '../../components/container';
import Profile from './profile';

export default function ProfilePage() {
	const { profile, skills } = useLoaderData();
	return (
		<div className='bg-cultured pb-24'>
			<div className='h-[350px] bg-primary-purple' />

			<Container className='flex flex-col lg:flex-row items-start gap-8 -mt-[280px]'>
				<Profile profile={profile} skills={skills} />
				<Outlet />
			</Container>
		</div>
	);
}

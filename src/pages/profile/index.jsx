import { Outlet } from 'react-router-dom';
import Container from '../../components/container';
import Profile from './profile';

export default function ProfilePage() {
	return (
		<div className='bg-cultured pb-24'>
			<div className='h-[350px] bg-primary-purple' />

			<Container className='flex flex-col lg:flex-row items-start gap-8 -mt-[280px]'>
				<Profile />
				<Outlet />
			</Container>
		</div>
	);
}
